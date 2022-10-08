import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {
  render() {
    return (
      <div className='btn-group'>
        <p className='filter-text'>Только избранные</p>
        <input className='filter-input' type="checkbox" id="switch" /><label htmlFor="switch" className='filter-label'>Toggle</label>
      </div>
    )
  }
}
