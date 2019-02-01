import React, { Component } from 'react'
import TodoList from './TodoList';
import PropTypes from 'prop-types'

export class Todos extends Component {
  render() {
    return this.props.todos.map((todo)=>(
      <TodoList key={todo.id} todo={todo}
      selectDone={this.props.selectDone}
      delItem={this.props.delItem} />
    ));

    
     
  }
}

export default Todos

Todos.propTypes ={
    todos: PropTypes.array.isRequired
}