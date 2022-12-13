import Personnage from "./Personnage";

export default function Personnages () {
    const personnes = [{actor: "Jim Carrey" , role: "Le Mask"},
    {actor: "Eddy Murphy", role: "L'ane"}]

    return(
    <div>
        {personnes.map((perso) => (
    <Personnage actor={perso.actor} role={perso.role}/>
        
        ))}
    </div>
    );
}
