import React, { Component } from 'react'
import Todos from './Todos'
import Header from './Header';
// import AddTodo from './AddTodo'


export class App extends Component {
  state={
    todos:[
    ]
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>{
      return response.json();
    })
    .then((myItem)=> {
      this.setState(()=>({
       todos: myItem.slice(0,20)
      }));
    });  
    }
selectDone=(id)=>{
  this.setState({ todos: this.state.todos.map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })
});
}

delItem = (id)=> {
  this.setState({ todos : [...this.state.todos.filter(todo =>
    todo.id !== id)]});
    
}
// addItem = (item) => {
//   const newTodo={
//     id:1,
//     item,
//     completed: true
//   }
//   this.setState({todos: [newTodo,...this.state.todos,]})
// };

  render() {

    return (
      <div>
        <Header />
        {/* <AddTodo  addItem={this.addItem} /> */}
        <Todos  todos={this.state.todos} 
        selectDone={this.selectDone}
        delItem={this.delItem}/>
      
      </div>
    )
  }
}

export default App
