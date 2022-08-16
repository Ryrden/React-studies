import React, {useState, useEffect} from "react";

function HookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	/* UseEffect
		1. The useEffect hook runs after every render
	*/

	//The second parameter is an array of dependencies to observe.
	useEffect(() => {
		console.log("useEffect - Updating document title");
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</div>
	);
}

export default HookCounterOne;
