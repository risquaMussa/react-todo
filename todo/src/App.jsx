function App() {
  const todoList = [
    { id: 1, title: "Complete assignemnt" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Call friend" },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
