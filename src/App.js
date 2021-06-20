import React, { Component } from 'react';
import 'antd/dist/antd.css';

import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.handleForm = (values) => {
      this.setState({
        todos: [
          {
            id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
            isChecked: false,
            ...values,
          },
          ...this.state.todos,
        ],
      });
    };
  }

  handelUpdate = (item) => {
    const lastResult = [...this.state.todos].map((obj) => {
      if (obj.id == item.id) {
        return item;
      }
      return obj;
    });
    this.setState({ todos: lastResult });
  };

  render() {
    return (
      <div style={{ margin: '5px 100px 0' }}>
        <Header handleForm={this.handleForm} />

        {this.state.todos.length == 0 ? (
          <h1 align="center" style={{ paddingTop: '250px' }}>
            There's no task to do :(
          </h1>
        ) : (
          <TodoList
            todoArr={this.state.todos}
            handelUpdate={this.handelUpdate}
          />
        )}
      </div>
    );
  }
}

export default App;
