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

const CompanyList = () => {

  const [companies, setCompanies] = useState([]);
  const [click, setClick] = useState(false);

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

  function handleCompanyButton() {

  }

  return (
    <ContainerCentralizer>
      <ListContainer>
        <Title>Lista de empresas</Title>
        <ListCentralizer>
          <List>
            {companies.map((company, index) => (
              <Company 
              key={company.id}
              imagePath={company.image_path}
              alt={company.name}
              onClick={handleCompanyButton}
              >
                <Name>{company.name}</Name>
              </Company>
            ))}
          </List>
        </ListCentralizer>
      </ListContainer>
    </ContainerCentralizer>
  )
}

export default CompanyList;