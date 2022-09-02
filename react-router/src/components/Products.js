import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Products = () => {
	return (
		<>
			<div>
				<input type="search" placeholder="Search product" />
			</div>
			<nav>
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>
			</nav>
			<Outlet /> {/* This is where the child routes will be rendered */}
		</>
	);
};
