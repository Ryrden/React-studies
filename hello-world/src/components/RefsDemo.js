import React, {Component} from "react";

class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef(); //1º Approach
		this.state = {};
		this.cbRef = null; //2º Approach 
		this.setCbRef = (element) => {
			this.cbRef = element;
		};
	}

	componentDidMount() {
		if (this.cbRef) this.cbRef.focus(); //2º Approach
		// this.inputRef.current.focus(); //1º Approach
	}

	clickHandler = () => {
		alert(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
