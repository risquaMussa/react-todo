import React from "react";
<<<<<<< HEAD
import style from "./TodoListItem.module.css";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types"
=======
>>>>>>> 188d8148287ff047b8ad72be211475b2fd47d3c6
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
TodoListItem.prototype = {
  todo: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
      title: PropTypes.string.isRequired,
    
}).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
