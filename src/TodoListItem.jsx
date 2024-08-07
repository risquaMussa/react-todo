import React from "react";
const TodoListItem = ({ todo, onRemoveTodo }) => {
  function clickHandler() {
    onRemoveTodo(todo.id);
  }

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    marginLeft: "10px",
  };

  return (
    <>
      <li className="todo-title">
        {todo.title}
        <button style={buttonStyle} onClick={clickHandler}>
          Remove
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
