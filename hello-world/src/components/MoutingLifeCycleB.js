import React, {Component} from "react";

class MoutingLifeCycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Fellas",
		};
		console.log("LifeCycleB constructor");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifeCycleB getDerivedStateFromProps");
		return null;
	}

	componentDidMount() {
		console.log("LifeCycleB componentDidMount");
	}

	render() {
		console.log("LifeCycleB render");
		return <div>LifeCycle B</div>;
	}
}

export default MoutingLifeCycleB;
