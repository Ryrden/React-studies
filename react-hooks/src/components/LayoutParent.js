import React from "react";
import styles from "../appStyles.module.css";
import LayoutMessage from "./LayoutMessage";

function LayoutParent() {
	const [show, setShow] = React.useState(false);
	const boxRef = React.useRef(null);

	return (
		<div>
			<div ref={boxRef} className={styles.box} onClick={() => setShow((prev) => !prev)}>
				Click me
			</div>
			{show && <LayoutMessage boxRef={boxRef}>Foo bar baz</LayoutMessage>}
		</div>
	);
}

export default LayoutParent;
