import React, {useState} from "react";

export const ParentOne = ({children}) => {
	const [count, setCount] = useState(0);
	console.log("ParentOne Render");

	/* How to avoid unnecessary render */

	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
			{/* <ChildOne/> // This will cause unnecessary render */}
			{children}
		</div>
	);
};
