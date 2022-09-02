// import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

/*
	Why NavLink?
	NavLink meant for building components 
	that are links to other parts of the application.
*/


export const NavBar = () => {
	const navLinkStyles = ({isActive}) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "none" : "underline",
		};
	};

	return (
		<nav>
			<NavLink style={navLinkStyles} to="/">
				Home
			</NavLink>
			<NavLink style={navLinkStyles} to="/about">
				About
			</NavLink>
		</nav>
	);
};
