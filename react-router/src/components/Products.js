import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Products = () => {
	return (
		<>
			<div>
				<input type="search" placeholder="Search product" />
			</div>
			<nav>
				{/* Relative Links: */}
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>
				{/* Absolute Links
				<Link to="/products/featured">Featured</Link>
				<Link to="/products/new">New</Link> 
				*/}
			</nav>
			<Outlet /> {/* This is where the child routes will be rendered */}
		</>
	);
};
