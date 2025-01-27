import './App.css';


const TODOS = [
    { todo: "Faire les courses", date: "28/01/2025", checked: true },
    { todo: "Nettoyer la maison", date: "29/01/2025", checked: false },
    { todo: "Compléter le projet React", date: "30/01/2025", checked: true },
  ];
  
  
  export default function Mpp() {
    const TODOS = [
      { todo: "Faire les courses", date: "28/01/2025" },
      { todo: "Nettoyer la maison", date: "29/01/2025" },
      { todo: "Compléter le projet React", date: "30/01/2025" },
    ];
  
    return (
      <article className="todolist">
        <h1>Ma Liste de Tâches</h1>
        <h2>{new Date().toLocaleString()}</h2>
        <ul>
          {TODOS.map((item, index) => (
            <ToDo key={index} todo={item.todo} date={item.date} />
          ))}
        </ul>
        <ul>
        {TODOS.map((item, index) => (
            <ToDoTernaire
            key={index}
            todo={item.todo}
            date={item.date}
            checked={item.checked}
            />
        ))}
        </ul>
        <ul>
        {TODOS.map((item, index) => (
            <ToDoAnd
            key={index}
            todo={item.todo}
            date={item.date}
            checked={item.checked}
            />
        ))}
        </ul>

      </article>
    );
  }
  
  
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

  function ToDoTernaire({ todo, date, checked }) {
    return (
      <li className={checked ? "green" : "orange"}>
        {checked && <input type="checkbox" defaultChecked />} {todo} - {date}
      </li>
    );
  }

  function ToDoAnd({ todo, date, checked }) {
    return (
      <li>
        {todo} - {date} {checked && <input type="checkbox" defaultChecked />}
      </li>
    );
  }
  
  
