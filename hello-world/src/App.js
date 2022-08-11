import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import Parentcomponent from "./components/Parentcomponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

function App() {
	return (
		<div className="App">
			<Form />
			{/* <h1 className="error">Error</h1> */}
			{/* <h1 className={styles.success}>Success</h1> */}
			{/* <Inline /> */}
			{/* <Stylesheet primary={true} /> */}
			{/* <NameList /> */}
			{/* <UserGreeting /> */}
			{/* <Parentcomponent /> */}
			{/* <EventBind /> */}
			{/* <FunctionClick /> */}
			{/* <ClassClick /> */}
			{/* <Counter /> */}
			{/* <Message /> */}
			{/* <Greet name="Bruce" heroName="Batman">
				<p>this is children props</p>
			</Greet>
			<Greet name="Clark" heroName="superMan">
				<button>Action</button>
			</Greet>
			<Greet name="Diana" heroName="Wonder Woman" />
			<Welcome name="Bruce" heroName="Batman" />
			<Welcome name="Clark" heroName="superMan" />
			<Welcome name="Diana" heroName="Wonder Woman" /> */}
			{/* <Hello /> */}
		</div>
	);
}

export default App;
