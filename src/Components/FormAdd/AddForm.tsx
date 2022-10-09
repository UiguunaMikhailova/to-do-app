import React, { ChangeEvent, Component, FormEvent } from 'react'
import './AddForm.css'

type AddFormProps = {
  onAdd: (text: string) => void
}

type StateForm = {
  text: string
}

export default class AddForm extends Component<AddFormProps> {
  onAdd
  state: StateForm
  constructor(props: AddFormProps) {
    super(props)
    this.onAdd = props.onAdd
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onValueChange(event: ChangeEvent) {
    this.setState({
      text: (event.target as HTMLInputElement).value
    })
  }
  onSubmit(e: FormEvent) {
    e.preventDefault();
    if (this.state.text.length > 0) this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <form
        className='bottom-panel d-flex'
        onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='Добавить задачу...'
          className='form-control new-post-label'
          onChange={this.onValueChange}
          value = {this.state.text}
        />
        <button 
          type='submit' 
          className='btn btn-outline-secondary'>
          Добавить
        </button>
      </form>
    )
  }
}
