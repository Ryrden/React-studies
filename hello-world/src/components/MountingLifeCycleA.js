import React, {Component} from "react";
import LifeCycleB from "./MoutingLifeCycleB";

class MoutingLifeCycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Fellas",
		};
		console.log("LifeCycleA constructor");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifeCycleA getDerivedStateFromProps");
		return null;
	}

	componentDidMount() {
		console.log("LifeCycleA componentDidMount");
	}

	render() {
		console.log("LifeCycleA render");
		return (
			<div>
				<div>LifeCycle A </div>
				<LifeCycleB />
			</div>
		);
	}
}

export default MoutingLifeCycleA;
