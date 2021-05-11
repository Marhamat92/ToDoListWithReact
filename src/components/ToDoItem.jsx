import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {}

  return (
    <div onClick={handleClick}>
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
