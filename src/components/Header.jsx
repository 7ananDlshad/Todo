import React, { Component } from 'react';
import {
  Modal, Button, Form, Input,
} from 'antd';

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
      const { handleForm } = this.props;
      handleForm(values);
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

export default Header;
