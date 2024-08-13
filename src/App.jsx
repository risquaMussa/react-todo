import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // JSON.parse(localStorage.getItem("savedTodoList"));
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        const savedList =
          JSON.parse(localStorage.getItem("savedTodoList")) || [];
        resolve({ data: { todoList: savedList } });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

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

      {isLoading ? (
        <p>Loading ...</p> //we use ternary operator to make not visible after loading the page
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
    </div>
  );
}
export default App;
