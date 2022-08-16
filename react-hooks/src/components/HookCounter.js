import React, {useState} from "react";

function HookCounter() {
	/* Rules To use Hook
        1.Only Call Hooks at the Top Level
        -> Don't call Hooks inside of loops, conditions, or nested functions.

        2.Only Call Hooks from React Functions
        -> call them from within React Funcional components and not just any regular JvaScript function
    */

	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	);
}

export default HookCounter;
