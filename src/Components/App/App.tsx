import React from 'react';
import AddForm from '../FormAdd/AddForm';
import Header from '../Header/Header';
import List from '../List/List';
import Search from '../Search/Search';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Search />
      <List />
      <AddForm />
    </>
  );
}

export default App;
