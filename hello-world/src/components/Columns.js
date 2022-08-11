import React from "react";

function Columns() {
	const items = [];
	return (
		<>
        {/* {items.map((item) => (
				//key is the only attribute that is required for React Fragment
				<React.Fragment key={item.id}>
					<h1>Title</h1>
					<p>{item.title}</p>
				<React.Fragment/>
			))} */}
			<td>name</td>
			<td>Fellas</td>
		</>
	);
}

export default Columns;
