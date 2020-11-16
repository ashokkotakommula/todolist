import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');


  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <textarea id="task"
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
          />
          <button onClick={handleSubmit} id="btn">
            Update
          </button>
        </>
      ) : (
        <>
          <textarea
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
          />
          <button onClick={handleSubmit} id="btn">
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
