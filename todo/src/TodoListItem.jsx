import React from "react";
const TodoListItem = ({ todo }) => {
  return (
    <>
      <li className="todo-title">{todo.title}</li>
    </>
  );
};

export default TodoListItem;
