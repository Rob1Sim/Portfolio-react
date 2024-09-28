import "./ParcoursCase.scss";
import {useTranslation} from "react-i18next";

function ParcoursCase({tab}){
    const { t } = useTranslation();
    let title;
    let duree;
    let description;
    let skills;
    switch (tab){
        case 0:
            title = t("hsd-title");
            duree = "2018 - 2021";
            description =  t("hsd-desc");
            skills = ["Python","HTML/CSS", "Algotithm"];
            break;
        case 1:
            title = t("BTEC");
            duree = "2021 - 2023";
            description = t("BTEC-desc");
            skills = ["PHP/Symfony","Javascript/React", "C#/.Net"];
            break;
        case 2:
            title = t("engineer");
            duree = "2023 - 2026";
            description = t("engineer-desc");
            skills = ["C/C++","Java/Jakarta","Azure"];
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