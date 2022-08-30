import React from "react";

/*
    Even if the function it wasn't not destructured,
    the function will be re-created every time 
    the parent component re-render
*/

export const ChildFive = ({name, person}) => {
	console.log("ChildFive Render");
	return (
		<div>
			Hello {name} {person.fname} {person.lname}
		</div>
	);
};

export const MemoizedChildFive = React.memo(ChildFive);
