import type {Component} from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

/**
 *
 *
 * @return {*}
 */
const App: Component = () => {
	const a = "pleaselintme";
	return (
		<div className={styles.App}>
			<header className={styles.header}>
				<img src={logo} className={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Solid
				</a>
			</header>
		</div>
	);
};

export default App;
