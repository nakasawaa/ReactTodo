import {useState} from "react"

const ls = localStorage;

export default function Todolist() {
 const [todo, setTodo] = useState(ls.getItem("text") === null ? "" : ls.getItem("text"));
 const [todos, setTodos] = useState([]);
 

 const addTask = (e) => {
  if (todo) {
    const newTodo = { todo: todo };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodo("");
  }
};
    return (
      <div>
        <h2>TodoList</h2>
        
        <input placeholder="Rentrez une tache" type ="text" ></input>
        <button onClick={addTask}>Ajouter</button>
        <ul>
        {Object.keys(ls).map((todos) => (
            <li>
                {todos}: {ls.getItem(todos)}
            </li>
        
        
        ))}
    </ul>
      </div>
    );
  }
  