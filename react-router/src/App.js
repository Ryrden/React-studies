import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Home} from "./components/Home";
// import {About} from "./components/About";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";
import {NoMatch} from "./components/NoMatch";
import {Products} from "./components/Products";
import {FeaturedProducts} from "./components/FeaturedProducts";
import {NewProducts} from "./components/NewProducts";
import {Users} from "./components/Users";
import {UsersDetails} from "./components/UsersDetails";
import {Admin} from "./components/Admin";
import {Profile} from "./components/Profile";
import {AuthProvider} from "./components/auth";
import {Login} from "./components/Login";
import {RequireAuth} from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
	return (
		<AuthProvider>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="about"
					element={
						<React.Suspense fallback="Loading...">
							<LazyAbout />
						</React.Suspense>
					}
				></Route>
				<Route path="order-summary" element={<OrderSummary />}></Route>
				<Route path="products" element={<Products />}>
					<Route index element={<FeaturedProducts />} /> {/* This is the default route */}
					<Route path="featured" element={<FeaturedProducts />} />
					<Route path="new" element={<NewProducts />} />
				</Route>
				<Route path="users" element={<Users />}>
					<Route path=":userId" element={<UsersDetails />} />
					<Route path="admin" element={<Admin />} />
				</Route>
				<Route
					path="profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<NoMatch />}></Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
