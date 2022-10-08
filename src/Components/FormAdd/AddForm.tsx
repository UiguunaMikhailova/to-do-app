import React, { Component } from 'react'
import './AddForm.css'

type AddFormProps = {
  onAdd: (text: string) => void
}

export default class AddForm extends Component<AddFormProps> {
  onAdd
  constructor(props: AddFormProps) {
    super(props)
    this.onAdd = props.onAdd
  }
  render() {
    return (
      <div className='bottom-panel d-flex'>
        <input
          type='text'
          placeholder='Добавить задачу'
          className='form-control new-post-label'
        />
        <button 
        type='submit' 
        className='btn btn-outline-secondary'
        onClick={() => this.onAdd('Hello')}>
          Добавить
        </button>
      </div>
    )
  }
}
