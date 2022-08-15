import React, {Component} from "react";

class User extends Component {
	/* The term "render prop" refers to a technique for sharing code
    between React components usign a prop whose value is a function */
	render() {
		return <div>{this.props.render(true)}</div>;
	}
}

export default User;
