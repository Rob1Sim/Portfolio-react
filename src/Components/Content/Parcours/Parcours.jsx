import ParcoursBtn from "./Parcours-btn/ParcoursBtn";
import ParcoursCase from "./Parcour-case/ParcoursCase";
import "./Parcours.scss";
import { useState } from "react";
import {useTranslation} from "react-i18next";


function Parcours(){

    const [numberButton, setNumberButton] = useState(0);
    const { t } = useTranslation();

    return(
        <section id="parcours">

            <h2>{t('title-background')}</h2>
            <div className="button-list">
                <ul className="button-list-ul">
                    <ParcoursBtn title={t('highschool-diploma')} changeValue={()=>{setNumberButton(0)}} />
                    <ParcoursBtn title={t('BTEC')} changeValue={()=>{setNumberButton(1)}}/>
                    <ParcoursBtn title={t('engineer-title')} changeValue={()=>{setNumberButton(2)}}/>
                </ul>
                <ParcoursCase tab={numberButton} />
            </div>
        </section>
    )
}

export default Parcours;

