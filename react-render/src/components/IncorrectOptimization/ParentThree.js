import React, {useState} from "react";
import {MemoizedChildThree} from "./ChildThree";

export const ParentThree = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Fellas");
	console.log("ParentThree Render");

	/* How to avoid unnecessary render */
	//USE REACT.MEMO


    /* 
    Pass props to children even if memoized will cause unnecessary render 
    
    This because React will compare the props of the memoized component with the previous props


    In React, props.children is always a new reference (objetct) which will cause
    the child component to always re-render

    So, you don't need to wrap your child with React.memo if the child
    component itself has children elements (<strong><div>,etc)

    */

	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("OpusSoftware")}>Change Name</button>
			<MemoizedChildThree name={name}>
				<strong>Hello</strong>
			</MemoizedChildThree>
			{/* This will cause unnecessary render if not converted to REACT.MEMO*/}
		</div>
	);
};
