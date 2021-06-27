import { FunctionalComponent, h } from "preact";
import ThingControllerFunc from "./thingControllerFunc";

const App: FunctionalComponent = () => (
	<div id="preact_root">
		hello there
		<ThingControllerFunc elCount="10"/>
	</div>
);

export default App;
