import React, {Component} from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}
	render() {
		/* 4º Approach - Only one Data*/
		return this.state.isLoggedIn && <div>Welcome Fellas</div>;
		//-----------------
		//-----------------
		/* 3º Approach with Ternary Operator */
		/* return this.state.isLoggedIn ? <div>Welcome Fellas</div> : <div>Welcome Guest</div>; */
		//-----------------
		//-----------------
		/* 2º Approach */
		/* let message;
		if (this.state.isLoggedIn) {
			message = <div>Welcome Fellas</div>;
		} else {
			message = <div>Welcome Guest</div>;
		}
		return <div>{message}</div>; */
		//-----------------
		//-----------------
		/* 1º Approach */
		/* if (this.state.isLoggedIn) {
			return <div>Welcome Fellas</div>;
		} else {
			return <div>Welcome Guest</div>;
		} */
	}
}

export default UserGreeting;
