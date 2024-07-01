import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>

      <AddTodoForm onAddToDo={setNewTodo} />

      <p>New todo: {newTodo}</p>
      <TodoList toDoList={TodoList} />
    </div>
  );
}
export default App;
