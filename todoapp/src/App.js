import React, { useCallback, useState } from 'react';
import TodoList from './components/TodoList';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import {v4} from 'uuid';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e)=>{
    setTextInput(e.target.value);
  });

  const onAddButtonClick = useCallback((e)=>{
    // setTodoList([{name: "Item 1"}]);
    // console.log({id: v4(), name: textInput, isCompeleted: false})
    setTodoList([ {id: v4(), name: textInput, isCompeleted: false}, ...todoList])
    setTextInput("");
  }, [textInput, todoList])
  return (
    <>
      <h3>Danh sách cần làvm</h3>
      <Textfield name="add-todo" placeholder='Thêm việc cần làm' elemAfterInput={
        <Button isDisabled={!textInput} appearance='primary' onClick={onAddButtonClick}>Thêm</Button>
      }
      css={{padding: "2px 4px 2px"}}
      value = {textInput}
      onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList = {todoList}/>
    </>
      
  );
}

export default App;
