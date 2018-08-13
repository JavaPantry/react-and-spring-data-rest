import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {

  tabStyle = {
        color: 'blue',
        border: '1px solid black'
  }

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }
    return (
        <div className="container">

        <div className="Todos">
            <h3>Customer List</h3>
            <table className="table-striped table-condensed table table-bordered table-hover" >
                <tbody>
                {todoItems}
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

/*Todos.tabStyle = {
    color: 'blue',
    border: '1px solid black'
}*/

export default Todos;
