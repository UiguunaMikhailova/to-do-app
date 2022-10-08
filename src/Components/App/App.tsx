import React, {Component} from 'react';
import AddForm from '../FormAdd/AddForm';
import Header from '../Header/Header';
import List from '../List/List';
import Search from '../Search/Search';
import './App.css';

export default class App extends Component {
  data = [
    { label: 'fghj', important: false },
    { label: 'dnjhjq', important: true },
    { label: 'three', important: false },
    { label: 'four', important: true },
  ]
  render() {
    return <div className='app'>
      <Header />
      <Search />
      <List posts={this.data}/>
      <AddForm />
    </div>
  }
}
