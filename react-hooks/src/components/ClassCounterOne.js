import React, {Component} from "react";

class ClassCounterOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			name: "",
		};
	}

	componentDidMount() {
		document.title = `Clicked  ${this.state.count} times`;
	}

	//How to only update the title when the count changes
	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state.count) {
			console.log("Updating document title");
			document.title = `Clicked  ${this.state.count} times`;
		}
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={(e) => {
						this.setState({name: e.target.value});
					}}
				/>
				<button onClick={() => this.setState({count: this.state.count + 1})}>
					Click {this.state.count} times
				</button>
			</div>
		);
	}
}

export default ClassCounterOne;
