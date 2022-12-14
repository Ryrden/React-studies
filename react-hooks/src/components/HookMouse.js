import React, {useState, useEffect} from "react";

function HookMouse() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = (e) => {
		console.log("Mouse event");
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log("useEffect - called");
		window.addEventListener("mousemove", logMousePosition);

		//The return function is called when the component is unmounted
		return () => {
			console.log("Component unmounting - called");
			window.removeEventListener("mousemove", logMousePosition);
		};
	}, [x, y]);

	return (
		<div>
			Hooks X - {x} Y - {y}
		</div>
	);
}

export default HookMouse;
