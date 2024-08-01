function InputWithLabel(props) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="todoTitle" className="title">
          {props.label}
        </label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={props.todoTitle}
          onChange={props.handleTitleChange}
        />
      </div>
    </>
  );
}

export default InputWithLabel;
