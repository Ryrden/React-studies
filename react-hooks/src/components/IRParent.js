import React, {useRef} from "react";
import IRInput from "./IRInput";

function IRParent() {
	const ref = useRef();

	const onFocus = () => {
		console.log(ref.current);
		ref.current.focus();
	};

	return (
		<div>
			<IRInput ref={ref} onFocus={onFocus} />
			<button onClick={onFocus}>Focus Input</button>
		</div>
	);
}

export default IRParent;
