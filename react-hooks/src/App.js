import "./App.css";
import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CouterTwo";
/* Resume of useState

  1.The useState hooks lets you add state to functional components.
  2. In classes, the state is always an object
  3. With the useState hook, the state doesn't have to be an object
  4. The useState hook returns an array with 2 elements
  5. The first element is the current value of state and the second element is a state setter function
  6. When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function
*/

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
	return (
		<div className="App">
			<CounterTwo />
			{/* <CounterOne /> */}
			{/* <UserContext.Provider value={"Fellas"}>
				<ChannelContext.Provider value={"OpusSoftware"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			{/* <DataFetching /> */}
			{/* <IntervalClassCounter /> */}
			{/* <IntervalHookCounter /> */}
			{/* <MouseContainer /> */}
			{/* <HookMouse /> */}
			{/* <ClassMouse /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterFour /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounterTwo /> */}
			{/* <HookCounter /> */}
			{/* <ClassCounter /> */}
		</div>
	);
}

export default App;
