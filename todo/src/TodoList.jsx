import React from "react";
import TodoListItem from "./TodoListItem";

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

export default TodoList;
