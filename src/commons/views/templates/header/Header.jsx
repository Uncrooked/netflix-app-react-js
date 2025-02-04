//react
import NavLinks from "./nav-links/NavLinks.jsx";
import NetflixLogo from "../../components/NetflixLogo.jsx";
import Link from "../../components/Link.jsx";
import PhoneMenu from "./PhoneMenu.jsx";

//data
import { allLinks } from "./data.js";

//functions
import { phoneMenuActions} from "./functions.js";

//css
import "./header.css";


export default function Header(props) {

  return (
    <section id="header" className="responsive-spacing">
      <Link data={allLinks[0]}>
            <NetflixLogo />
      </Link>
      <NavLinks allLinks={allLinks} functionsSet={props.functionsSet} setIsFiltered={props.setIsFiltered}  />
      <PhoneMenu alt="burger menu netflix" menuIcon="burger" styleClass="burger-menu" onClickEvent={() => {phoneMenuActions("open")}}/>
    </section>
  );
}