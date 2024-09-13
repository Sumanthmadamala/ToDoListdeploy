import React from "react";

const ToDoList = (props) => {
  return (
    <div className="todo__style">
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.delete(props.id);
        }}
      />
      <li>{props.value}</li>;
    </div>
  );
};
export default ToDoList;
