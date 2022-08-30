import React, {useState} from "react";
import {MemoizedChildFive} from "./ChildFive";

export const ParentFive = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Fellas");
	console.log("ParentFive Render");

	/*
        When pass an object, function or array as a prop 
        to a child component, react memo will not work
        because the object, function or array is a reference type
        so, every time parent component re-render, 
        the object, function or array will be re-created
    */

	const handleClick = () => {};

	const person = {
		fname: "Bruce",
		lname: "Wayne",
	};

	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
			<button onClick={() => setName("OpusSoftware")}>Change Name</button>
			<MemoizedChildFive name={name} person={person} handleClick={handleClick} />
		</div>
	);
};
