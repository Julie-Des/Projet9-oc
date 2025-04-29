/* eslint-disable no-return-assign */
import Button, { BUTTON_TYPES } from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
	<nav>
		<Logo size="small"/>
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
		<Button
			title="contact"
			onClick={() => {
				if (window.location.hash === "#contact") {
					// On enlève temporairement le hash
					window.history.replaceState(null, "", window.location.pathname + window.location.search);
				}

				// Puis on le remet → déclenche le scroll
				window.location.hash = "#contact";
			}}
      type = {BUTTON_TYPES.DEFAULT}
      disabled = {false}
		>
			Contact
		</Button>
	</nav>
);

export default Menu;
