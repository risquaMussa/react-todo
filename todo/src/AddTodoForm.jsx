import React from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    console.log(event);
    event.preventDefault();

    // retrieve the value of the title element from the event target and store it in a variable named todoTitle
    const todoTitle = event.target[0].value;
    console.log("Todo Title:", todoTitle);

    // Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component
    props.onAddToDo(todoTitle);

    //reset the form so the text input value is cleared
    event.reset();
  };
  return (
    <>
      <form className="form" onSubmit={handleAddTodo}>
        <div className="form-group">
          <label htmlFor="todoTitle" className="title">
            Title
          </label>
          <input type="text" id="todoTitle" name="title" />
        </div>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodoForm;
