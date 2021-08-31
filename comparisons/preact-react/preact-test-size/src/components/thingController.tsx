import { Component, h } from "preact";
import Thing from "./thing";

interface props {
	elCount: string,
}

interface state {
	spawnedElements: number[],
	numOffset: number,
	addPerClick: number,
}

class ThingController extends Component<props, state> {
	constructor(props: props) {
		super();
		this.state = {
			spawnedElements: [] as number[],
			numOffset: 0,
			addPerClick: parseInt(props.elCount, 10),
		};
		this.rerender = this.rerender.bind(this);
	}

	rerender() {
		this.setState({
			spawnedElements: this.state.spawnedElements.concat(this.spawnstuff()),
		});
	}

	spawnstuff(): number[] {
		const elms = [] as number[];
		for (let i = this.state.spawnedElements.length; i < this.state.spawnedElements.length + this.state.addPerClick; i++) {
			elms.push(i);
		}
		this.setState({
			numOffset: Math.floor(Math.random() * 100),
		});
		
		return elms;
	}
	componentDidMount() {
		this.rerender();
	}

	render() {
		return (
			<div>
				<p>asdf</p>
				<p>qwer</p>
				{this.state.spawnedElements.map((el) => <Thing key={el} something={el} rerender={this.rerender} numOffset={this.state.numOffset} />)}
			</div>
		);
	}
}

export default ThingController;
