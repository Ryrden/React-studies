import React from "react";
import styles from "../appStyles.module.css";

function LayoutMessage({boxRef, children}) {
	const msgRef = React.useRef(null);

	React.useLayoutEffect(() => {
		const rect = boxRef.current.getBoundingClientRect();
		msgRef.current.style.top = `${rect.height + rect.top}px`;
	}, []);

	return (
		<span ref={msgRef} className={styles.msg}>
			{children}
		</span>
	);
}

export default LayoutMessage;
