import React, {useState} from "react";
import {MemoizedChildTwo} from "./ChildTwo";

export const ParentTwo = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Fellas");
	console.log("ParentTwo Render");

	/* How to avoid unnecessary render */
	//USE REACT.MEMO

	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("OpusSoftware")}>Change Name</button>
			<MemoizedChildTwo name={name} />{" "}
			{/* This will cause unnecessary render if not converted to REACT.MEMO*/}
		</div>
	);
};
