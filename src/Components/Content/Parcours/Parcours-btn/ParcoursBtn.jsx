import "./ParcoursBtn.scss";


function ParcoursBtn({title, changeValue}){

    return(
        <li className="list-parcours" onClick={changeValue}>
            <button className="list-btn" >{title}</button>
        </li>
    )
}

export default ParcoursBtn;

