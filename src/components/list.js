import React, { useState } from 'react';
import TodoForm from './form';
import Todo from './editTodo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (todo.text === "") {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (newValue.text === "") {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
      />
    </>
  );
}

export default TodoList;
