import './Description.scss';
import img from '/assets/images/moi.jpeg';

function Description(){
    return(
        <div className="description-row">
            <section className="description" id='about'>
                <h2>À propos</h2>
                <p>Je m'appelle Robin Simonneau, j'ai commencé à programmer assez jeune à l'époque pour créer des mods pour Minecraft et depuis je ne me suis jamais arrêté.
                    J'ai pu essayer plein de langages de programmation et de technologies différentes comme : Java, Python, Javascript, et les fondamentaux du web !
                </p>
                <p>
                    Après avoir étudié le développement web à l'Institut Universitaire de Technologie (IUT) de Reims, ou j'y es apris des technologies comme PHP et Symfony, C# et .NET et pleins d'autres.
                    J'y est aussi appris les bases de la comptabilité, du droit de l'informatique, et de la gestion de projet !
                    Je suis maintenant en formation pour devenir ingénieur informatique en alternance à CY Tech à Cegy.
                </p>
                <p>
                Évidemment en grand curieux que je suis, je suis toujours à la recherche de nouvelles choses à apprendre, à l'heure ou j'écris ces lignes c'est <strong>React</strong>, ce site est d'ailleurs réalisé avec React .
                </p>
                <p>Voici une petite liste des technologies que j'utilise :</p>
                <div className="skills">
                    <ul>
                        <li> PHP</li>
                        <li> Symfony</li>
                        <li> Javascript</li>
                        <li> Python</li>
                    </ul>
                    <ul>
                        <li> MySQL</li>
                        <li> C#/.Net</li>
                        <li> Docker</li>
                        <li> Et bien d'autre encore ...</li>
                    </ul>
                </div>
        </section>
        <img className='image-of-me' src={img} alt="Picture of me" />

        </div>
    )
}

export default Description;