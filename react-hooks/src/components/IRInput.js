import React, {useState, useRef, useImperativeHandle} from "react";

const IRInput = React.forwardRef((props, ref) => {
	const [val, setVal] = useState("");
	const inputRef = useRef();

	useImperativeHandle(ref, () => ({
		focus: () => {
			document.title = val;
			inputRef.current.focus();
		},
	}));

	return (
		<div>
			<input ref={inputRef} type="text" onChange={(e) => setVal(e.target.value)} />
		</div>
	);
});

export default IRInput;
