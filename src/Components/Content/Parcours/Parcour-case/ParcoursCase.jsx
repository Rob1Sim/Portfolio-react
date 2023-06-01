import "./ParcoursCase.scss";

function ParcoursCase({tab}){
    let title;
    let duree;
    let description;
    let skills;
    switch (tab){
        case 0:
            title = "Baccalauréat Général, Lycée Marie-curie, Versailles";
            duree = "2018 - 2021";
            description = "J'ai décroché mon baccalauréat général spécialisé en Numérique et Science de l'Informatique (NSI) et Mathématiques en 2021.";
            skills = ["Python","HTML/CSS", "Algorithmie"];
            break;
        case 1:
            title = "DUT Informatique à l'Instut Universitaire de Technologie (IUT) de Reims";
            duree = "2021 - 2023";
            description = "Après le bac je me suis dirigé vers une formation web à Reims, ou je me suis spécialisé dans le développement .Net.";
            skills = ["PHP/Symfony","Javascript/React", "C#/.Net"];
            break;
        case 2:
            title = "Formation ingénieur en alternance à Cergy";
            duree = "2023 - 2026";
            description = "Pour compléter mon cursus scolaire je me suis dirigé sur une formation ingénieur informatique à Cergy, " +
                "l'alternance me permet d'acquérir et des appliquer mes apprentissages dans des projets réels. ";
            skills = ["C++","Java"];
            break;
    }
    const skillsLi = skills.map((skill,i)=>(<li key={i} className={"skill-"+i}>{skill}</li>))


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