import React, { Component } from 'react';
import { List, Popconfirm } from 'antd';
import { DeleteFilled, CheckCircleFilled, EditFilled } from '@ant-design/icons';
import FormModal from './FormModal';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      isModalVisible: false,
    };

    this.handleDelete = (index) => {
      const { handleDeleteSetstate } = this.props;
      handleDeleteSetstate(index);
    };

    this.handleComplete = (item) => {
      const { handelUpdate } = this.props;
      const newItem = {
        ...item,
        isChecked: !item.isChecked,
      };
      handelUpdate(newItem);
      this.setState({
        item: newItem,
      });
    };

    this.handleEdit = (item) => {
      this.setState({ isModalVisible: true, item: { ...item } });
    };

    this.handleCancel = () => {
      this.setState({ isModalVisible: false, item: {} });
    };
  }

  render() {
    const { todos, handelUpdate } = this.props;
    const { isModalVisible, item } = this.state;
    return (
      <List
        header="ToDo List"
        dataSource={todos}
        renderItem={(item1, index) => (
          <List.Item>
            <List.Item.Meta
              title={item1.title}
              description={item1.description}
            />
            <CheckCircleFilled
              style={
                item1.isChecked
                  ? { fontSize: '125%', color: 'green' }
                  : { fontSize: '125%', color: 'gray' }
              }
              onClick={() => {
                this.handleComplete(item1);
              }}
            />

            <EditFilled
              style={{
                fontSize: '125%',
                margin: '0 17px',
                color: '#096dd9',
              }}
              onClick={() => {
                this.handleEdit(item1);
              }}
            />

            <FormModal
              isModalVisible={isModalVisible}
              handleCancel={this.handleCancel}
              item={item}
              handelUpdate={handelUpdate}
            />
            <Popconfirm
              title={`Are you sure delete ${item1.title} task ?`}
              onConfirm={() => this.handleDelete(index)}
              okText="Yes"
              cancelText="No"
              placement="bottom"
            >
              <DeleteFilled style={{ fontSize: '125%', color: 'red' }} />
            </Popconfirm>
          </List.Item>
        )}
      />
    );
  }
}

export default TodoList;
