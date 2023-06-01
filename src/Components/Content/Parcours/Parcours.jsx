import ParcoursBtn from "./Parcours-btn/ParcoursBtn";
import ParcoursCase from "./Parcour-case/ParcoursCase";
import "./Parcours.scss";
import { useState } from "react";


function Parcours(){

    const [numberButton, setNumberButton] = useState(0);

    

    return(
        <section id="parcours">

            <h2> Mon parcours</h2>
            <div className="button-list">
                <ul className="button-list-ul">
                    <ParcoursBtn title="Baccalauréat" changeValue={()=>{setNumberButton(0)}} />
                    <ParcoursBtn title="DUT informatique" changeValue={()=>{setNumberButton(1)}}/>
                    <ParcoursBtn title="CY Tech" changeValue={()=>{setNumberButton(2)}}/>
                </ul>
                <ParcoursCase tab={numberButton} />
            </div>
        </section>
    )
}

export default Parcours;

