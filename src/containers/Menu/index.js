/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => {
  const handleContactClick = () => {
    if (window.location.hash === "#contact") {
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = "#contact";
      }, 0);
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a href="#nos-services">Nos services</a>
        </li>
        <li>
          <a href="#nos-realisations">Nos réalisations</a>
        </li>
        <li>
          <a href="#notre-equipe">Notre équipe</a>
        </li>
      </ul>
      <Button title="contact" onClick={handleContactClick}>
        Contact
      </Button>
    </nav>
  );
};

export default Menu;
