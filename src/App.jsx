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
      const { todos } = this.state;
      this.setState({
        todos: [
          {
            id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
            isChecked: false,
            ...values,
          },
          ...todos,
        ],
      });
    };

    this.handelUpdate = (item) => {
      const { todos } = this.state;
      const lastResult = [...todos].map((obj) => {
        if (obj.id === item.id) {
          return item;
        }
        return obj;
      });
      this.setState({ todos: lastResult });
    };

    this.handleDeleteSetstate = (index) => {
      const { todos } = this.state;
      todos.splice(index, 1);
      this.setState({ todos });
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div style={{ margin: '5px 100px 0' }}>
        <Header handleForm={this.handleForm} />

        {todos.length === 0 ? (
          <h1 align="center" style={{ paddingTop: '250px' }}>
            There is no task to do :(
          </h1>
        ) : (
          <TodoList
            todos={todos}
            handelUpdate={this.handelUpdate}
            handleDeleteSetstate={this.handleDeleteSetstate}
          />
        )}
      </div>
    );
  }
}

export default App;
