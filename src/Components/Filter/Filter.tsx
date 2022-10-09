import React, { Component } from 'react'
import './Filter.css'

type FilterProps = {
  onFilter: (isChecked: boolean) => void
}

export default class Filter extends Component<FilterProps> {
  state = {
    isChecked: false
  }
  onToggleFilter() {
    const isChecked = !this.state.isChecked
    this.setState({ isChecked })
    this.props.onFilter(isChecked)
  }
  render() {
    return (
      <div className='btn-group'>
        <p className='filter-text'>Только избранные</p>
        <input
          className='filter-input'
          type="checkbox" id="switch"
          onChange={this.onToggleFilter.bind(this)}
          checked={this.state.isChecked}
          />
        <label
          htmlFor="switch"
          className='filter-label'
        >Toggle</label>
      </div>
    )
  }
}
