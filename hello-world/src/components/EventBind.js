import React, {Component} from "react";
class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};

		// this.clickHandler = this.clickHandler.bind(this); //3 approach
	}

	/* clickHandler() { //1,2,3 approach
		this.setState({
			message: "Goodbye",
		});
		console.log(this);
	} */

	clickHandler = () => {
		//4 approach on 3 approach
		this.setState({
			message: "GoodBye!",
		});
	};

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* <button onClick={this.clickHandler.bind(this)}>Click</button> 1 approach */}
				{/* <button onClick={() => this.clickHandler()}>Click</button> //2 approach */}
				<button onClick={this.clickHandler}>Click</button> {/* //3 approach */}
			</div>
		);
	}
}

export default EventBind;
