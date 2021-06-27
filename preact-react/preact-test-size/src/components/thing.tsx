import { Component, createRef, RefObject, h } from "preact";

interface Props {
	something: number;
	rerender: () => void,
	numOffset: number,
}

interface State {
	num: number,
}

class Thing extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			num: props.something + props.numOffset,
		}
	}
	textEl = createRef() as RefObject<HTMLParagraphElement>;

	componentDidMount() {
		this.setState({
			num: this.state.num + this.props.numOffset,
		})
	}

	asdf(): void {
		this.props.rerender();
		if (this.textEl.current !== null) {
			// textEl.current.innerText += "1";
			this.setState({
				num: this.state.num + 1,
			})
		}
	}

	render() {
		return (
		<div>
			<span ref={this.textEl}>thing</span>
			<span>{this.state.num}</span>
			<button onClick={this.asdf}>click</button>
		</div>
		);
	}
};

export default Thing;
