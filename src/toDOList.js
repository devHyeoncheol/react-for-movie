import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  return (
    <>
      <h1>todo {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="인풋임"
          value={todo}
        />
        <button>new todo</button>
      </form>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}

export default App;
