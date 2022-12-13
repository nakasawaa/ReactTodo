import {Link} from "react-router-dom";


export default function Header () {
    return(
        <div>
            <Link to ="/">Accueil</Link>
            <Link to ="/fruits " >Fruits</Link>
            <Link to ="/condition">Condition</Link>
            <Link to ="/perso">Persos</Link>
            <Link to ="/calculatrice">Calculatrice</Link>
            <Link to ="/localstorage">Local</Link>
            <Link to ="/todolist">todolist</Link>
        </div>
    )
}