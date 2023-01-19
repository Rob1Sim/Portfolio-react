import ParcoursBtn from "./Parcours-btn/ParcoursBtn";
import "./Parcours.scss";


function Parcours(){

    return(
        <section id="parcours">

            <h2> Mon parcours</h2>
            <div className="button-list">
                <ul>
                    <ParcoursBtn title="Baccalauréat"/>
                    <ParcoursBtn title="IUT informatique"/>

                </ul>
            </div>
        </section>
    )
}

export default Parcours;

