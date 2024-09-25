import { useEffect, useRef } from "react";
<<<<<<< HEAD
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
=======
>>>>>>> 188d8148287ff047b8ad72be211475b2fd47d3c6

function InputWithLabel(props) {
  //use ref can be used to store dom elements
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
<<<<<<< HEAD
      <div className={style.FormGroup}>
        <label htmlFor="todoTitle" className={style.title}>
=======
      <div className="form-group">
        <label htmlFor="todoTitle" className="title">
>>>>>>> 188d8148287ff047b8ad72be211475b2fd47d3c6
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

InputWithLabel.prototype = {
  children: PropTypes.node.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
