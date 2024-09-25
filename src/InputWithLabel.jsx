import { useEffect, useRef } from "react";

function InputWithLabel(props) {
  //use ref can be used to store dom elements
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <div className="form-group">
        <label htmlFor="todoTitle" className="title">
          {props.children}
        </label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={props.todoTitle}
          onChange={props.handleTitleChange}
          ref={inputRef}
        />
      </div>
    </>
  );
}

export default InputWithLabel;
