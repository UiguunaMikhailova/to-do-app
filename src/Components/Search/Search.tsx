import React, { ChangeEvent, Component } from 'react'
import Filter from '../Filter/Filter'
import './Search.css'

type SearchProps = {
  state?: {
    term: string
  },
  onUpdateSearch: (term: string) => void,
  onUpdateFilter: (isChecked: boolean) => void
}

export default class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props)
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }
  onUpdateSearch(e: ChangeEvent) {
    const term = (e.target as HTMLInputElement).value
    this.setState({term})
    this.props.onUpdateSearch(term)
  }
  filterPosts(isChecked: boolean) {
    console.log(isChecked)
    this.props.onUpdateFilter(isChecked)
  }
  render() {
    return (
        <div className='search-panel d-flex'>
            <input
              className='form-control search-input'
              type='text'
              placeholder='Поиск по записям'
              onChange={this.onUpdateSearch}
            />
            <Filter 
              onFilter={(isChecked) => this.filterPosts(isChecked)}/>
        </div>
    )
  }
}
