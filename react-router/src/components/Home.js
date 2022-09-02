import {useNavigate} from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();

	//replace option will replace the current page in the history stack
	//in other words, popping out the current page from the history stack
	return (
		<>
			<div>Home Page</div>
			<button onClick={() => navigate("order-summary", {replace: true})}>Place order</button>
		</>
	);
};
