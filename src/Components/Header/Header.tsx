import React, { Component } from 'react'
import './Header.css'

type HeaderProps = {
  allTasks: number,
  donedTasks: number
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className='app-header d-flex'>
        <h1>To Do App</h1>
        <div>
          <h5>Задач: {this.props.allTasks}</h5>
          <h5>Выполнено: {this.props.donedTasks}</h5>
        </div>
      </div>
    )
  }
}
