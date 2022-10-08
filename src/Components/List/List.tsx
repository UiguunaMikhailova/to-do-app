import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

type ListItemProps = {
  label: string,
  important: boolean
}
type ListProps = {
  posts: ListItemProps[]
}

export default class List extends Component<ListProps> {
  elements = this.props.posts.map((item) => {
    return (
      <li className='list-group-item'>
        <ListItem {...item} />
      </li>
    )
  })
  render() {
    return (
      <ul className='app-list list-group'>
        {this.elements}
      </ul>
    )
  }
}
