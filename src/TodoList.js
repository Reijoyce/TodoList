import React, { Component } from 'react'
import './App.css';

export class TodoList extends Component {
    getStyle =()=>{
            return{
                background: '#faebd7',
                textDecoration: this.props.todo.completed ?
                 'none' : 'line-through'
            }
        
    }
  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.selectDone.bind
        (this, id)}/> {' '}
        {title}
        <button  onClick={this.props.delItem.bind(this, id)} className='button' value='title'>X</button>
        </p>
      </div>
    )
  }
}

export default TodoList
