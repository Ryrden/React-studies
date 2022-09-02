import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {NavBar} from "./components/NavBar";
import { OrderSummary } from "./components/OrderSummary";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="order-summary" element={<OrderSummary />}></Route>
			</Routes>
		</>
	);
}

export default App;
