import { useEffect, createRef, useState, FunctionComponent, RefObject } from "react";

interface Props {
	something: number;
	rerender: () => void,
	numOffset: number,
}

const ThingFunc: FunctionComponent<Props> = (props: Props) => {
	const [num, setNum] = useState(props.something + props.numOffset as number);
	const textEl = createRef() as RefObject<HTMLParagraphElement>;

	useEffect(() => {
		setNum(num + props.numOffset);
	}, [num, props]);

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

export default ThingFunc;
