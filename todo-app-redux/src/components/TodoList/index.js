import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4}  from 'uuid';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { searchTextSelector, todoListSelector, todoRemainingSelector } from './../../redux/selectors';

export default function TodoList() {
  const dispatch = useDispatch();
  const handleAddButtonClick = ()=>{
    dispatch(
      addTodo(
        {
          name: todoName,
          id: uuidv4(),
          priority: priority,
          completed: false

        }
      )
    )
    setTodoName('');
    setPriority('Medium');
  }

  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const handleInputChange = (e)=>{
    setTodoName(e.target.value);

  }
  const todoList = useSelector(todoRemainingSelector);
  // const todoList = useSelector(todoListSelector);
  // Lấy giá trị searchText từ kho về
  // const searchText = useSelector(searchTextSelector);
  // console.log(searchText);

  // Ở đây đang sử dụng select từ antd khi lấy value thì value là value chứ ko phải event.target.value
  const handlePriorityChange = (value)=>{
      setPriority(value);
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map(todo => <Todo id={todo.id} key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
