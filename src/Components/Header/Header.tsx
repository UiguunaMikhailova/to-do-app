import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='app-header d-flex'>
        <h1>To Do App</h1>
        <h3>7 записей, из них 3 помечено как важные</h3>
      </div>
    )
  }
}
