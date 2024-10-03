import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true); //for toggled

  //start from here
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map((record) => ({
        title: record.fields.title,
        id: record.id,
      }));
      console.log("unsorted ", data);

      // ___________________________before toggle button___________________________///////////
      // sort the todos ascending alphabetical order
      // const ascendingSorted = todos.sort((objectA, objectB) => {
      //   const titleA = objectA.title.toLowerCase();
      //   const titleB = objectB.title.toLowerCase();

      //   if (titleA < titleB) return -1;
      //   if (titleA > titleB) return 1;
      //   return 0;
      // });
      // console.log("ascending alphabetical order by title ", ascendingSorted);

      // //desscending order
      // const descendingSorted = todos.sort((objectA, objectB) => {
      //   const titleA = objectA.title.toLowerCase();
      //   const titleB = objectB.title.toLowerCase();

      //   if (titleA < titleB) return 1;
      //   if (titleA > titleB) return -1;
      //   return 0;
      // });
      // console.log("desscending alphabetical order by title ", descendingSorted);

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
  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
    const sortedTodos = [...todoList].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (isAscending) {
        return titleA < titleB ? 1 : titleA > titleB ? -1 : 0;
      } else {
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      }
    });
    setTodoList(sortedTodos);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Todo List</h1>

              <AddTodoForm onAddToDo={addTodo} />

              {isLoading ? (
                <p>Loading ...</p> //we use ternary operator to make not visible after loading the page
              ) : (
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
              )}
              <button onClick={toggleSortOrder}>
                {isAscending ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
                {isAscending ? " Sort Descending" : " Sort Ascending"}
              </button>

              {/* <TodoContainer /> */}
            </div>
          }
        ></Route>

        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
