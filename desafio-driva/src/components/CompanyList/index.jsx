import React, { useState, useEffect } from 'react'
import {
  ContainerCentralizer,
  ListContainer,
  Title,
  List,
  ListCentralizer,
  Company,
  Name
} from './styleCompanyList';
import axios from 'axios';
import CompanyProfile from '../CompanyProfile';

const CompanyList = () => {

  const [companies, setCompanies] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function handleCompanyClick(company) {
    setSelectedCompany(company);
    setIsClicked(true);
  }
  
  console.log(selectedCompany);
  return (
    <ContainerCentralizer>
      {isClicked === false ?
        <ListContainer>
          <Title>Lista de empresas</Title>
          <ListCentralizer>
            <List>
              {companies.map((company, index) => (
                <Company
                  key={company.id}
                  imagePath={company.image_path}
                  alt={company.name}
                  onClick={() => handleCompanyClick(company)}
                >
                  <Name>{company.name}</Name>
                </Company>
              ))}
            </List>
          </ListCentralizer>
        </ListContainer>
        : 
        <CompanyProfile company={selectedCompany} />
    }
    </ContainerCentralizer>
  )
}

export default CompanyList;