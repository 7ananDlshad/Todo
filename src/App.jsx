import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {
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
          <TodoList />
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

export default connect(mapStateToProps)(App);
