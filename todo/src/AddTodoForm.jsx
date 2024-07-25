import React, { useState } from "react";

function AddTodoForm({ onAddToDo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    console.log(event);
    event.preventDefault();

    //  Inside handleAddTodo, update the onAddTodo callback prop
    //  to pass an Object instead of a String; Object:
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddToDo(newTodo);
    setTodoTitle("");
  };
  return (
    <>
      <form className="form" onSubmit={handleAddTodo}>
        <div className="form-group">
          <label htmlFor="todoTitle" className="title">
            Title
          </label>
          <input
            type="text"
            id="todoTitle"
            name="title"
            value={todoTitle}
            onChange={handleTitleChange}
          />
        </div>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodoForm;
