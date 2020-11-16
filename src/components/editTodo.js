import React, { useState } from 'react';
import TodoForm from './form';

const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todos.map((todo, index) => (
    <div className="box" 
      key={index}
    >
      <div key={todo.id} className="list" className={todo.isComplete ? "list complete" : "list"} onClick={() => props.completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <button className="align"
          onClick={() => props.removeTodo(todo.id)}
        >Delete</button>
        <button className="align"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >Edit</button>
        </div>
    </div>
  ));
};

export default Todo;