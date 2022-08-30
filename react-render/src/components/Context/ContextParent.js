import React, {useState} from "react";
import {ChildA} from "./ContextChildren";

/* Write code like down below to use
Context passing prop are not the best way
to optimize the performance of the app

this because every time the parent component
re-render, the context value will be re-created
and all the children component will be re-render
*/

export const CountContext = React.createContext();
const countProvider = CountContext.Provider;

export const ContextParent = () => {
	const [count, setCount] = useState(0);

	console.log("ContextParent Render");
	return (
		<>
			<button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
			<CountContext.Provider value={count}>
				<ChildA />
			</CountContext.Provider>
		</>
	);
};
