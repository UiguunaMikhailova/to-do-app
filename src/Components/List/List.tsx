import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

export default class List extends Component {
  render() {
    return (
      <ul className='app-list list-group'>
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    )
  }
}
