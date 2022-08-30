import React from "react";

/* Although the props not change, in this case is 
necessary re-render cause the time changes

So, this is an incorrect Optimization

Date() is an example and randomness is another example*/

export const ChildFour = ({name}) => {
	const date = new Date();
	console.log("ChildFour Render");
	return (
		<div>
			Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
		</div>
	);
};

export const MemoizedChildFour = React.memo(ChildFour);
