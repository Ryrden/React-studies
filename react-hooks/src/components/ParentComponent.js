import React, {useState, useCallback} from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(50000);

	const incrementAge = useCallback(() => {
		setAge(age + 1);
	}, [age]);

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000);
	}, [salary]);

	/* Re-redering problem
	
		Pass a function as prop to a component and then use 
		the function in the component don't ensure that the component 
		will not re-render because the function changes every time it 
		is called.

		--How to solve?
		How to tell to react that there is no need to create another 
		a new function to when update the state
		Answer: Use Callback Hook
	*/

	/* UseCallback Hook 
	
		What?
			-UseCallback Hook is a function component that 
			returns a memoized version of the function passed to it.
			-That function will only changes if one of the dependencies
			has changed
		
		Why?
			-It is useful when passing callback to optimized child components
			that rely on reference equality to prevent unnecessary renders.
		
		How?
			Import from React
			Create a function component that uses the useCallback Hook
			useCallback(YourFunction(), [YourDependencies])
	*/

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	);
}

export default ParentComponent;
