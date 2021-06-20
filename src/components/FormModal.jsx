import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';

class FormModal extends Component {
  componentDidUpdate() {
    // console.log(this.props.item);
    if (this.props.isModalVisible && this.props.item && this.props.item.id) {
      this.ref.current.setFieldsValue({
        ...this.props.item,
      });
    }
  }

  onFinish = (values) => {
    console.log(values);
    this.props.handelUpdate(values);
    this.props.handleCancel();
  };

  ref = React.createRef();
  render() {
    return (
      <>
        <Modal
          title="Edit Todo"
          visible={this.props.isModalVisible}
          onCancel={this.props.handleCancel}
          footer={null}
        >
          <Form
            name="form-modal"
            layout={'vertical'}
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

            <Form.Item hidden={true} name="id">
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
