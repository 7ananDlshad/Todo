import React, { Component } from 'react';
import {
  Modal, Form, Input, Button,
} from 'antd';

class FormModal extends Component {
  constructor(props) {
    super(props);
    const {
      handelUpdate, handleCancel, isModalVisible, item,
    } = this.props;
    this.onFinish = (values) => {
      handelUpdate(values);
      handleCancel();
    };
    this.ref = React.createRef();

    this.componentDidUpdate = () => {
      if (isModalVisible && item && item.id) {
        this.ref.current.setFieldsValue({
          ...item,
        });
      }
    };
  }

  render() {
    const { isModalVisible, handleCancel } = this.props;
    return (
      <>
        <Modal
          title="Edit Todo"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            name="form-modal"
            layout="vertical"
            ref={this.ref}
            onFinish={this.onFinish}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>

            <Form.Item hidden name="id">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default FormModal;
