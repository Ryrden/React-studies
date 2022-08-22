import React, {useState, useEffect, useRef} from "react";

/* UseRef Hook

    He can be used to simulate a generic pointer that 
    can be used to reference a value across a component's
    lifecycle. It's useful for keeping track 
*/

function HookTimer() {
	const [timer, setTimer] = useState(0);
	const intervalRef = useRef();

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTimer((prevState) => prevState + 1);
		}, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<div>
			Hook Timer - {timer}
			<button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
		</div>
	);
}

export default HookTimer;
