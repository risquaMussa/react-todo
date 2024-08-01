import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";
import { useEffect, useState } from "react";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  function removeTodo(id) {
    const filteredtodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredtodo);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddToDo={addTodo} />
      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    </div>
  );
}
export default App;
