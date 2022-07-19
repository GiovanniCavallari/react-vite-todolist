import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import List from '../../components/List';

import './styles.css';

function ToDo() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {
      text: 'Sample To Do',
      done: false,
    },
  ]);

  const addTodo = () => {
    if (value !== '') {
      const item = {
        text: value,
        done: false,
      };

      const newItems = [...items, item];
      setItems(newItems);
      setValue('');
    }
  };

  const finishItem = (index) => {
    const newItems = [...items];
    newItems[index].done = true;
    setItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    addTodo();
  };

  return (
    <div className="todo-container">
      <h1>To Do List</h1>

      <div className="todo-form-container">
        <Input
          label="Add To Do"
          name="todo"
          value={value}
          placeholder="Type here..."
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={handleClick}>Adicionar</Button>
      </div>

      <List items={items} onFinish={finishItem} onRemove={removeItem} />
    </div>
  );
}

export default ToDo;
