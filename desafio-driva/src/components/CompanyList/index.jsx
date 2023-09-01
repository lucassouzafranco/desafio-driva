import React from 'react'
import {
  ContainerCentralizer,
  ListContainer,
  Title, 
  List,
  ListCentralizer,
  Company,
  Name
} from './styleCompanyList';

const CompanyList = () => {
  return (
    <ContainerCentralizer>
      <ListContainer>
        <Title>Lista de empresas</Title>
        <ListCentralizer>
            <List>
              <Company><Name>Name</Name></Company>
            </List>
        </ListCentralizer>
      </ListContainer>
    </ContainerCentralizer>
  )
}

export default CompanyList;