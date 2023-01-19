import "./ParcoursCase.scss";

function ParcoursCase({tab}){
    let title;
    let duree;
    let description;
    let skills;
    if (tab == 0){
        title = "Baccalauréat Général, Lycée Marie-curie, Versailles";
        duree = "2018 - 2021";
        description = "J'ai décroché mon baccalauréat général spécialisé en Numérique et Science de l'Informatique (NSI) et Mathématiques en 2021";
        skills = ["Python","HTML/CSS", "Algorithmie"]
    }else if(tab == 1){
        title = "DUT Informatique à l'Instut Universitaire de Technologie (IUT) de Reims";
        duree = "2021 - 2023";
        description = "Après le bac je me suis dirigé vers une formation web à Reims, ou je me suis spécialisé dans le développement .Net";
        skills = ["PHP/Symfony","Javascript/React", "C#/.Net"]
    }

    const skillsLi = skills.map((skill,i)=>(<li className={"skill-"+i}>{skill}</li>))


    return (
        <div className="parcours-case">
            <h3>{title}</h3>
            <h4>{duree}</h4>
            <p>{description}</p>
            <ul>
                {skillsLi}
            </ul>
        </div>
    )
}

export default ParcoursCase;