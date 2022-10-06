import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import './Search.css'

export default class Search extends Component {
  render() {
    return (
        <div className='search-panel d-flex'>
            <input
              className='form-control search-input'
              type='text'
              placeholder='Поиск по записям'
            />
            <Filter />
        </div>
    )
  }
}
