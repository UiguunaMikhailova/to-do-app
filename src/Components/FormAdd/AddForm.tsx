import React, { Component } from 'react'
import './AddForm.css'

export default class AddForm extends Component {
  render() {
    return (
      <form className='bottom-panel d-flex'>
        <input
          type='text'
          placeholder='Добавить задачу'
          className='form-control new-post-label'
        />
        <button type='submit' className='btn btn-outline-secondary'>
          Добавить
        </button>
      </form>
    )
  }
}
