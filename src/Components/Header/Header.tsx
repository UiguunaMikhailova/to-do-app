import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='app-header d-flex'>
        <h1>To Do App</h1>
        <div>
          <h5>Задач: 3</h5>
          <h5>Выполнено: 0</h5>
        </div>
      </div>
    )
  }
}
