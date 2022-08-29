import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import {ObjectUseState} from "./components/ImmutableState/ObjectUseState";
import {ArrayUseState} from "./components/ImmutableState/ArrayUseState";
import {Parent} from "./components/Parent Child/Parent";

function App() {
	return (
		<div className="App">
			<Parent />
			{/* <ArrayUseState /> */}
			{/* <ObjectUseState /> */}
			{/* <UseReducer /> */}
			{/* <UseState /> */}
		</div>
	);
}

export default App;
