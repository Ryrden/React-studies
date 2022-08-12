import React, {Component} from "react";

/* About Error Boundary
1. Error boundaries are React components that catch javascript error
in their child component tree.log those errors, and display a l-back UI

2. A class component becomes an Error Boundary by defining either or both
of getDerivedStateFromError and componentDidCatch. lifecycle methods

3. THe placement of the Error Boundary also matters as it controls if the
entire app should have the fall-back UI or just the component causing 
the problem

4. Provide a way to gracefully handle error in application code
*/

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return {hasError: true};
	}

	componentDidCatch(error, info) {
		console.log(error);
		console.log(info);
	}

	render() {
		if (this.state.hasError) return <h1>Something went wrong</h1>;
		return this.props.children;
	}
}

export default ErrorBoundary;
