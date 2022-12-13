import "./App.css";
import Film from "./components/Film";
import Condition from "./components/Condition";
import AffichageBoucle from "./components/AfficherBoucle";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Personnages from "./components/Personnages";
import Calculatrice from "./components/Calculatrice";
import LocalStorage from "./components/LocalStorage";
import Todolist from "./components/TodoList";
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Film />}></Route>
        <Route path='/fruits' element={<AffichageBoucle />}></Route>
        <Route path='/condition' element={<Condition />}></Route>
        <Route path='/perso' element={<Personnages/> }> </Route>
        <Route path='/calculatrice' element={<Calculatrice/> }></Route>
        <Route path='/localstorage' element={<LocalStorage/> }></Route>
        <Route path='/todolist' element={<Todolist/> }></Route>


      </Routes>
    </div>
  );
}

export default App;
