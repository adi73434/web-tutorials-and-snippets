import { useEffect, createRef, useState, FunctionComponent, RefObject } from "react";
import ThingFunc from "./thingFunc";

interface Props {
	elCount: string,
}


const ThingController: FunctionComponent<Props> = (props: Props) => {

	const [spawnedElements, setSpawnedElements] = useState([] as number[]);
	const [addPerClick, setaddPerClick] = useState(parseInt(props.elCount, 10));
	const [numOffset, setNumOffset] = useState(0);

	const rerender = () => {
		setSpawnedElements(spawnedElements.concat(spawnstuff()))
	}

	const spawnstuff = (): number[] => {
		const elms = [] as number[];
		for (let i = spawnedElements.length; i < spawnedElements.length + addPerClick; i++) {
			elms.push(i);
		}
		setNumOffset(Math.floor(Math.random() * 100));
		
		return elms;
	}
	useEffect(() => {
		rerender();
	}, []);

		return (
			<div>
				<p>asdf</p>
				<p>qwer</p>
				{spawnedElements.map((el) => <ThingFunc key={el} something={el} rerender={rerender} numOffset={numOffset} />)}
			</div>
		);
}

export default ThingController;
