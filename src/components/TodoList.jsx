import React, { Component } from 'react';
import { List } from 'antd';
import { DeleteFilled, CheckCircleFilled, EditFilled } from '@ant-design/icons';
import FormModal from './FormModal';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      item: {},
      isModalVisible: false,
    };
  }

  handleDelete = (index) => {
    this.setState({ todoArr: this.props.todoArr.splice(index, 1) });
  };

  handleComplete = (item) => {
    const newItem = {
      ...item,
      isChecked: !item.isChecked,
    };
    this.props.handelUpdate(newItem);
    this.setState({
      item: newItem,
    });
  };

  handleEdit = (item) => {
    this.setState({ isModalVisible: true, item: { ...item } });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false, item: {} });
  };

  render() {
    return (
      <List
        header="ToDo List"
        dataSource={this.props.todoArr}
        renderItem={(item, index) => {
          return (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
              <CheckCircleFilled
                style={
                  item.isChecked
                    ? { fontSize: '125%', color: 'green' }
                    : { fontSize: '125%', color: 'gray' }
                }
                onClick={() => {
                  this.handleComplete(item);
                }}
              />

              <EditFilled
                style={{
                  fontSize: '125%',
                  margin: '0 17px',
                  color: '#096dd9',
                }}
                onClick={() => {
                  this.handleEdit(item);
                }}
              />

              <FormModal
                isModalVisible={this.state.isModalVisible}
                handleCancel={this.handleCancel}
                item={this.state.item}
                handelUpdate={this.props.handelUpdate}
              />

              <DeleteFilled
                style={{ fontSize: '125%', color: 'red' }}
                onClick={() => this.handleDelete(index)}
              />
            </List.Item>
          );
        }}
      />
    );
  }
}

export default TodoList;
