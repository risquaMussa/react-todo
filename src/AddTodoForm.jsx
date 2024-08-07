import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodoForm;
