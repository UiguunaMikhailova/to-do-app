import React, {Component} from 'react';
import AddForm from '../FormAdd/AddForm';
import Header from '../Header/Header';
import List from '../List/List';
import Search from '../Search/Search';
import './App.css';

type ListItemProps = {
  label: string,
  important: boolean,
  id: number,
  done: boolean
}
type AppProps = {
  data: ListItemProps[]
}

export default class App extends Component<{}, AppProps> {
  maxId
  constructor(props: AppProps) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleDone = this.onToggleDone.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.maxId = 4
  }
  state: AppProps = {
    data: [
      { id: 1, label: 'first Task', important: false, done: false },
      { id: 2, label: 'second Task', important: false, done: false },
      { id: 3, label: 'third Task', important: false, done: false },
    ]
  }
  deleteItem(id: number) {
    this.setState(() => {
      const newArr = [...this.state.data]
      const index = newArr.findIndex((item) => item.id === id)
      const newData = [...newArr.slice(0, index), ...newArr.slice(index + 1)]
        return {
          data: newData
        }
    })
  }
  addItem(body: string) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
      done: false
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }
  onToggleDone(id: number) {
    this.setState(({ data }) => {
      const index = data.findIndex((task) => task.id === id)
      const item = data[index]
      const newItem = {...item, done: !item.done}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }
  onToggleImportant(id: number) {
    this.setState(({ data }) => {
      const index = data.findIndex((task) => task.id === id)
      const item = data[index]
      const newItem = {...item, important: !item.important}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }
  render() {
    const completedTasksCount = this.state.data.filter((item) => item.done).length;
    const allTasksCount = this.state.data.length;
    return <div className='app'>
      <Header
        donedTasks={completedTasksCount}
        allTasks={allTasksCount}
      />
      <Search />
      <List
        posts={this.state.data}
        onDelete={this.deleteItem}
        onToggleDone={this.onToggleDone}
        onToggleImportant={this.onToggleImportant}
      />
      <AddForm 
        onAdd={this.addItem}
      />
    </div>
  }
}
