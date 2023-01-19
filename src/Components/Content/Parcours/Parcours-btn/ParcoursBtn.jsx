import "./ParcoursBtn.scss";


function ParcoursBtn({title}){

    return(
        <li className="list-parcours">
            <button className="list-btn">{title}</button>
        </li>
    )
}

export default ParcoursBtn;

