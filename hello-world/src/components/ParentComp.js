import React, {Component} from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Fellas",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "Fellas",
			});
		}, 2000);
	}

	render() {
		console.log("***************************ParentComponent render***************************");
		/* The difference between Regular and Pure Component 
            Pure Component is a Component that is not changing its state.
            
            In other word
            A regular component does not implement the shouldComponentUpdate method.
            A pure component implements the shouldComponentUpdate method with shallow comparison.

			What is Sallow Comparison
				return true if the new and old props and state are equal.
			
			So, PureComponents preventing unnecessary re-renders.
			This implicate a boost performance.

			NEVER mutate the state, Always return a new object that reflects the new state
        */
		return (
			<div>
				Parent Component
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
