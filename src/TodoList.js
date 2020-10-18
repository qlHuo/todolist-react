import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'


class TodoList extends Component {
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  state = {
    list: [],
    inputValue: ''
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  getTodoItems () {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            deleteItem={this.handleDelete} key={index}
            content={item}
            index={index}
          />
        )
      })
    )
  }

  // 父组件通过属性的方式向子组件传递参数
  // 子组件通过 props 的方式接受父组件传递过来的参数

  // 添加行内样式的方式：style={{ background: 'red', color: '#fff' }}
  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>

        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    )

  }
}

export default TodoList;
