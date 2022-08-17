import React, {useState, useEffect} from "react";

function IntervalHookCounter() {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	useEffect(() => {
		/*If exists a dependcy prop, the usual it create function inside the useEffect hook
		function doSomething() {
			console.log(someProp);
		}*/
		const Interval = setInterval(tick, 1000);
		return () => {
			clearInterval(Interval);
		};
	}, [/*someProp*/]); //React need watch the variable, if setCount use "prevCount", that it's not necessary to watch the variable.

	return <div>{count}</div>;
}

export default IntervalHookCounter;
