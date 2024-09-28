import React from "react";
import TodoListItem from "./TodoListItem";

import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  // const todoList = [
  //   { id: 1, title: "Complete assignemnt" },
  //   { id: 2, title: "Buy groceries" },
  //   { id: 3, title: "Call friend" },
  // ];
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
export default TodoList;
