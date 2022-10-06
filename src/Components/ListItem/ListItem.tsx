import React, { Component } from 'react'
import './ListItem.css'

export default class ListItem extends Component {
  render() {
    return (
      <li className='app-list-item d-flex justify-content-between'>
        <span className='app-list-item-label'>
            Helloooo
        </span>
        <div className='d-flex justify-content-center align-items-center'>
            <button className='btn-star btn-sm' type='button'>
                <i className='fa-regular fa-star'></i>
            </button>
            <button className='btn-trash btn-sm' type='button'>
                <i className='fa fa-trash-o'></i>
            </button>
            <button className='btn-heart btn-sm' type='button'>
                <i className='fa fa-heart'></i>
            </button>
        </div>
      </li>
    )
  }
}
