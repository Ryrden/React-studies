import React, {useContext} from "react";
import {CountContext} from "./ContextParent";
export const ChildA = () => {
	console.log("child A Render");
	return (
		<>
			<div>Child A</div>
			<ChildB />
		</>
	);
};

//This fix the unnecessary re-render caused by
//Context passing prop
export const memoizedChildA = React.memo(ChildA);

export const ChildB = () => {
	console.log("child B Render");
	return (
		<>
			<div>Child B</div>
			<ChildC />
		</>
	);
};

//here, childC is flagged to re-render because
//the context value is re-created every time
//and the child component are consuming the context
export const ChildC = () => {
	const count = useContext(CountContext);
	console.log("child C Render");
	return (
		<>
			<div>Child C count = {count}</div>
		</>
	);
};
