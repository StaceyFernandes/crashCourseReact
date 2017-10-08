import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key= {todo.title} todo={todo} />
        )
      });
    }

    return (
      <div className="Todo">
      <h3> Todo list </h3>
        {todoItems}
      </div>
    );
  }
}

// Projects.PropTypes = {
//
//   onDelete: React.PropTypes.func,
// }
export default Todos;
