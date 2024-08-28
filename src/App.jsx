import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]) ?? [];
  const [isLoading, setIsLoading] = useState(true);
  //start from here
  const fetchData = async () => {
    //to check api key
    // const apiKey = import.meta.env.VITE_AIRTABLE_API_TOKEN;
    // console.log(apiKey);
    // const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    // console.log(baseId);

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      const todos = data.records.map((record) => ({
        title: record.fields.title,
        id: record.id,
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
