import { FunctionalComponent, h } from "preact";
import ThingController from "./thingController";

const App: FunctionalComponent = () => (
	<div id="preact_root">
		hello there
		<ThingController elCount="10"/>
	</div>
);

export default App;
