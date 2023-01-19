import "./ParcoursBtn.scss";


function ParcoursBtn({title, changeValue}){

    return(
        <li className="list-parcours">
            <button className="list-btn" onClick={changeValue}>{title}</button>
        </li>
    )
}

export default ParcoursBtn;

