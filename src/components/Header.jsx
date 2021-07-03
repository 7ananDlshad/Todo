import React, { Component } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { addTodo } from '../actions/getTodos';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.reference = React.createRef();
    this.showModal = () => {
      this.setState({ isModalVisible: true });
    };

    this.handleCancel = () => {
      this.setState({ isModalVisible: false });
    };

    this.onFinish = (values) => {
      const newData = {
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        isChecked: false,
        ...values,
      };

      this.props.addTodo(newData);
      this.reference.current.resetFields();
      this.setState({ isModalVisible: false });
    };
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1>ToDo</h1>
        <Button type="primary" onClick={this.showModal}>
          New
        </Button>

        <Modal
          title="Add New Todo"
          visible={isModalVisible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            name="todo-form"
            layout="vertical"
            onFinish={this.onFinish}
            ref={this.reference}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please Enter Title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add Todo
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
//do i need below function?
const mapStateToProps = (state) => {
  return {
    todos: state.Todos,
  };
};

const mapDispatchToProsp = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProsp)(Header);
