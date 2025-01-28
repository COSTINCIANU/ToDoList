import React from "react";

function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="todo" placeholder="La ToDo" />
      <input type="text" name="date" placeholder="La Date" />
      <input type="submit" value="Ajouter" />
    </form>
  );
}

export default Form;
