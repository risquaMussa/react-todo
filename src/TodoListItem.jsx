import React from "react";
import style from "./TodoListItem.module.css";
import { FaTrashAlt } from "react-icons/fa";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  function clickHandler() {
    onRemoveTodo(todo.id);
  }
  return (
    <>
      <li className={style.ListItem}>
        {todo.title}
        <button className={style.ButtonStyle} onClick={clickHandler}>
          <FaTrashAlt />
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
