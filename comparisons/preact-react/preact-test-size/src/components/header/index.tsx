import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header: FunctionalComponent = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href={process.env.PUBLIC_PATH}>Home</Link>
			<Link activeClassName={style.active} href={process.env.PUBLIC_PATH + "profile"}>Me</Link>
			<Link activeClassName={style.active} href={process.env.PUBLIC_PATH + "profile/john"}>John</Link>
		</nav>
	</header>
);

export default Header;
