import { Fragment, useState } from 'react';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <CompanyList />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
