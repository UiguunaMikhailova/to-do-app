import React, { Component } from 'react'
import './ListItem.css'


type ListItemProps = {
  label?: string,
  important: boolean
}
export default class ListItem extends Component<ListItemProps> {
  constructor(props: ListItemProps) {
    super(props)
    this.onImportant = this.onImportant.bind(this)
  }
  state: ListItemProps = {
    important: false
  }
  onImportant() {
    this.setState(() => ({
      important: !this.state.important
    }))
  }
  render() {
    const { important } = this.state;
    let classNames = 'app-list-item d-flex justify-content-between'
    let img = 'https://img.icons8.com/color/48/000000/star.png'
    if (important) {
      classNames += ' important'
      img = 'https://img.icons8.com/windows/25/000000/star--v1.png'
    }
    return (
      <div className={classNames}>
        <span className='app-list-item-label'>
            {this.props.label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
            <button 
              className='btn-star btn-sm' 
              type='button'>
              <img src='https://img.icons8.com/color/48/000000/checkmark.png' alt='done' className='done'/>
            </button>
            <button 
              className='btn-trash btn-sm' 
              type='button'>
              <img src='https://img.icons8.com/sf-regular/50/undefined/trash.png' alt='trash' className='trash'/>
            </button>
            <button 
              className='' 
              type='button'
              onClick={this.onImportant}>
              <img src={img} alt='star' className='star'/>
            </button>
        </div>
      </div>
    )
  }
}
