import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {


    tabStyle = {
        color: 'blue',
        border: '1px solid black'
    }
/*
<td>{this.props.todo.userId}</td><td>{this.props.todo.title}</td><td>{this.props.todo.completed}</td>

*/

  render() {
    return (
      <tr >{/*className="Todo"*/}
        <td style={this.tabStyle}>{this.props.todo.id}</td>
        <td style={this.tabStyle}>{this.props.todo.customerName}</td>
        <td style={this.tabStyle}>{this.props.todo.companyCode}</td>
        <td style={this.tabStyle}>{this.props.todo.companyName}</td>
        <td style={this.tabStyle}>{this.props.todo.phone}</td>
        <td style={this.tabStyle}>{this.props.todo.ext}</td>
        <td style={this.tabStyle}>{this.props.todo.email}</td>
      </tr>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem;
