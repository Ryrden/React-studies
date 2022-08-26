import React, {useReducer} from "react";

const initalState = 0;

const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initalState;
		default:
			return state;
	}
};

const UseReducer = () => {
	const [count, dispatch] = useReducer(reducer, initalState);

	console.log("useReducer Render");
	return (
		<div>
			<div>{count}</div>
			<button onClick={() => dispatch("increment")}>Increment</button>
			<button onClick={() => dispatch("decrement")}>Decrement</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
		</div>
	);
};

export default UseReducer;
