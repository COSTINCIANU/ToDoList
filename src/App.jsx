import React, { useState } from "react";
import ToDo from "./components/ToDo/ToDo";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { todo: "Faire les courses", date: "2025-01-27", status: "à faire" },
    { todo: "Finir le projet React", date: "2025-01-28", status: "en cours" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoValue = event.target.elements[0].value;
    const dateValue = event.target.elements[1].value;

    if (!todoValue.trim() || !dateValue.trim()) {
      alert("Veuillez remplir tous les champs avant d'ajouter une tâche.");
      return;
    }

    const newTodo = { todo: todoValue, date: dateValue, status: "à faire" };
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    event.target.reset();
  };

  const toggleStatus = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index
          ? {
              ...todo,
              status:
                todo.status === "à faire"
                  ? "en cours"
                  : todo.status === "en cours"
                  ? "terminée"
                  : "à faire",
            }
          : todo
      )
    );
  };

  return (
    <article className="todolist">
      <h1>Ma To-Do List</h1>
      <h2>{new Date().toLocaleString()}</h2>
      <ul>
        {todos.map((item, index) => (
          <ToDo
            key={index}
            todo={item.todo}
            date={item.date}
            status={item.status}
            onToggle={() => toggleStatus(index)}
          />
        ))}
      </ul>
      <Form onSubmit={handleSubmit} />
    </article>
  );
}

export default App;
