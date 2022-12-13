import Personnage from "./Personnage";

export default function Personnages () {
    const personnes = [{actor: "Jim Carrey" , role: "Bitch"},
    {actor: "Eddy Murphy", role: "Salop"}]

    return(
    <div>
        {personnes.map((perso) => (
    <Personnage actor={perso.actor} role={perso.role}/>
        
        ))}
    </div>
    );
}
