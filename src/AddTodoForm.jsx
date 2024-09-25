import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

function AddTodoForm({ onAddToDo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
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

//https://github.com/risquaMussa/react-todo/pull/15
 