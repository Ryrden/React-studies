import React from "react";

function Title() {
	console.log("Rendering Title");
	return <h2>useCallback Hook</h2>;
}

//To avoid re-rendering the component, we use React.memo to make sure that the component is not re-rendered if the props are the same.
export default React.memo(Title);
