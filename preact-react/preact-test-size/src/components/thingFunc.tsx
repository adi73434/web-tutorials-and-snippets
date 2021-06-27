import { FunctionalComponent, h, createRef, RefObject } from "preact";
import { useState, useEffect } from "preact/hooks";

interface Props {
	something: number;
	rerender: () => void,
	numOffset: number,
}

const Thing: FunctionalComponent<Props> = (props: Props) => {
	const [num, setNum] = useState(props.something + props.numOffset as number);

	const textEl = createRef() as RefObject<HTMLParagraphElement>;

	useEffect(() => {
		setNum(num + props.numOffset);
	}, []);

	function asdf(): void {
		props.rerender();
		if (textEl.current !== null) {
			// textEl.current.innerText += "1";
			setNum(num + 1);
		}
	}

	return ( <div>
		<span ref={textEl}>thing</span>
		<span>{num}</span>
		<button onClick={asdf}>click</button>
	</div>
	);
};

export default Thing;
