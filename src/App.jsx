import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { listTodos, addTodo } from './actions/getTodos';

class App extends Component {
  constructor(props) {
    super(props);
    this.handelUpdate = (item) => {
      const { todos } = this.props;
      const lastResult = [...todos].map((obj) => {
        if (obj.id === item.id) {
          return item;
        }
        return obj;
      });
    };
  }

  render() {
    const { todos } = this.props;
    return (
      <div style={{ margin: '5px 100px 0' }}>
        <Header />

        {todos.length === 0 ? (
          <h1 align="center" style={{ paddingTop: '250px' }}>
            There is no task to do :(
          </h1>
        ) : (
          <TodoList handelUpdate={this.handelUpdate} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.Todos,
  };
};

const mapDispatchToProsp = {
  listTodos,
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProsp)(App);
