import React from "react";
import "./ToDo.css";

function ToDo({ todo, date, status, onToggle }) {
  return (
    <li className={`todo-item ${status}`}>
      <span className="todo-text">
        <input type="checkbox" onChange={onToggle} />
        {todo}
      </span>
      <span className="todo-date">{date}</span>
      <span className="todo-status">({status})</span>
    </li>
  );
}

export default ToDo;
