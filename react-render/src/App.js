import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import {ObjectUseState} from "./components/ImmutableState/ObjectUseState";
import {ArrayUseState} from "./components/ImmutableState/ArrayUseState";
import {Parent} from "./components/Parent Child/Parent";
import {ParentOne} from "./components/Optimization/ParentOne";
import {ChildOne} from "./components/Optimization/ChildOne";
import {GrandParent} from "./components/Optimization/GrandParent";
import {ParentTwo} from "./components/Optimization/ParentTwo";
import {ParentThree} from "./components/IncorrectOptimization/ParentThree";

function App() {
	return (
		<div className="App">
			<ParentThree />
			{/* <ParentTwo /> */}
			{/* <GrandParent/> */}
			{/* <ParentOne>
				<ChildOne />
			</ParentOne> */}
			{/* <Parent /> */}
			{/* <ArrayUseState /> */}
			{/* <ObjectUseState /> */}
			{/* <UseReducer /> */}
			{/* <UseState /> */}
		</div>
	);
}

export default App;
