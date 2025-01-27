import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Déclare un tableau d’objets TODOS avec case a cocher
const TODOS = [
  { todo: "Faire les courses", date: "27/01/2025", checked: true },
  { todo: "Réviser React", date: "28/01/2025", checked: false },
  { todo: "Aller courir", date: "29/01/2025", checked: true },
];


// Composant ToDO
function ToDo({ todo, date, checked }) {
  if (checked) {
    return (
      <li className="green">
        <input type="checkbox" defaultChecked /> {todo} - {date}
      </li>
    );
  } else {
    return <li className="orange">{todo} - {date}</li>;
  }
}

// Le composant ToDoTernaire 
function ToDoTernaire({ todo, date, checked }) {
  return (
    <li className={checked ? "green" : "orange"}>
      {checked && <input type="checkbox" defaultChecked />}
      {todo} - {date}
    </li>
  );
}

// Le composant ToDoAnd
function ToDoAnd({ todo, date, checked }) {
  return (
    <li>
      {todo} - {date}
      {checked && <input type="checkbox" defaultChecked />}
    </li>
  );
}


function App() { 

  return (
    <article className="todolist">
      <h1>Ma ToDo List</h1>
      <h2>{new Date().toLocaleString()}</h2>

      <ul>
      {TODOS.map((item, index) => (
          <ToDo key={index} todo={item.todo} date={item.date} checked={item.checked} />
        ))}
        {/* {TODOS.map((item, index) => (
          <ToDoTernaire key={index} todo={item.todo} date={item.date} checked={item.checked} />
        ))}
        {TODOS.map((item, index) => (
          <ToDoAnd key={index} todo={item.todo} date={item.date} checked={item.checked} />
        ))} */}
      </ul>

    </article>
  );
}

export default App
