import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  //const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddToDo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}
export default App;
