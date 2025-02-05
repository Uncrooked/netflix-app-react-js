import IconLink from "./IconLink";


//data
import { socialMedias } from "./data";

//css
import "./Footer.css";

export default function Footer(){

    let renderMedias = socialMedias.map((param,index) => <IconLink iconName={param} key={index} />)

    return(
        <section className="responsive-spacing" id="footer">
            <ul className="social-links">
                {renderMedias}
            </ul>
            <ul className="member-footer-links">
                <li className="member-footer-link-wrapper" key={1} >
                    <a className="member-footer-link" href="" target="_self">Audiodescription</a>
                </li>
                <li className="member-footer-link-wrapper" key={2}>
                    <a className="member-footer-link" href="" target="_self">Centre d'aide</a>
                </li>
                <li className="member-footer-link-wrapper" key={3}>
                    <a className="member-footer-link" href="" target="_self">Cartes cadeaux</a>
                </li>
                <li className="member-footer-link-wrapper" key={4}>
                    <a className="member-footer-link" href="" target="_self">Presse</a>
                </li>
                <li className="member-footer-link-wrapper" key={5}>
                    <a className="member-footer-link" href="" target="_self">Relations Investisseurs</a>
                </li>
                <li className="member-footer-link-wrapper" key={6}>
                    <a className="member-footer-link" href="" target="_self">Recrutement</a>
                </li>
                <li className="member-footer-link-wrapper" key={7}>
                    <a className="member-footer-link" href="" target="_self">Boutique Netflix</a>
                </li>
                <li className="member-footer-link-wrapper" key={8}>
                    <a className="member-footer-link" href="" target="_self">Conditions d'utilisation</a>
                </li>
                <li className="member-footer-link-wrapper" key={9}>
                    <a className="member-footer-link" href="" target="_self">Confidentialité</a>
                </li>
                <li className="member-footer-link-wrapper" key={10}>
                    <a className="member-footer-link" href="" target="_self">Informations légales</a>
                </li>
                <li className="member-footer-link-wrapper" key={11}>
                    <a className="member-footer-link" href="/Cookies" target="_self">Préférences de cookies</a>
                </li>
                <li className="member-footer-link-wrapper" key={12}>
                    <a className="member-footer-link" href="" target="_self">Mentions légales</a>
                </li>
                <li className="member-footer-link-wrapper" key={13}>
                    <a className="member-footer-link" href="" target="_self">Nous contacter</a>
                </li>
                <li className="member-footer-link-wrapper" key={14}>
                    <a className="member-footer-link" href="" target="_self">Choix liés à la pub</a>
                </li>
            </ul>
            <div className="member-footer-copyright">© By Léo Murail - Ceci n'est qu'une représentation fictive de netflix selon Léo Murail</div>
        </section>
    )
}