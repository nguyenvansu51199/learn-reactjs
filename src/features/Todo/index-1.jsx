import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  function handleTodoClick(todo, idx) {
    console.log(todo, idx);
    const cloneTodoList = [...initTodoList];

    const newTodo = {
      ...cloneTodoList[idx],
      status: todo.status === 'completed' ? 'new' : 'completed',
    };

    setTodoList(newTodo);
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
