import React, { useState, useEffect, useContext } from "react";
import "./css/styles.css";
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from "react-router-dom";

import { UserContext } from "./Context/UserContext";

import SignInPage from "./Components/SignInPage/SignInPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import HomePage from "./Components/HomePage/HomePage";
import { kBaseUrl } from "./constants";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	// const [loading, setLoading] = useState(false);
	const { userProfile, setUserProfile } = useContext(UserContext);

	useEffect(() => {
		fetch(kBaseUrl + "/authenticate", {
			credentials: "include",
			method: "GET",
		})
			.then((res) => {
				if (res.status == 200) {
					fetch(kBaseUrl + "/user/viewProfile", {
						credentials: "include",
						method: "GET",
					})
						.then(async (res) => {
							const resJSON = await res.json();
							const { data } = resJSON;
							setUserProfile(data.data);
						})
						.then(() => {
							setLogin();
							// setLoading(false);
						});
				} else {
					// setLoading(false);
					setLogout();
				}
			})
			.catch((e) => {
				console.log(e);
				// setLoading(false);
			});
	}, []);

	const setLogin = () => {
		setLoggedIn(true);
		console.log("User Logged In !");
	};
	const setLogout = () => {
		setLoggedIn(false);
		console.log("User Logged Out !");
	};

	const checkSignIn = () => {
		return loggedIn ? (
			<Redirect to="/dashboard" />
		) : (
			<SignInPage setLogin={setLogin} admin={false} />
		);
	};

	const checkSignUp = () => {
		return loggedIn ? (
			<Redirect to="/dashboard" />
		) : (
			<SignUpPage setLogin={setLogin} admin={false} />
		);
	};

	const checkForgotPassword = () => {
		return loggedIn ? <Redirect to="/dashboard" /> : <ForgotPassword />;
	};

	const toHome = () => {
		return loggedIn ? <HomePage /> : <Redirect to="/user/signin" />;
	};
	const toAdminHome = () => {
		return loggedIn ? <HomePage /> : <Redirect to="/admin/signin" />;
	};

	const checkAdminSignIn = () => {
		return loggedIn ? (
			<Redirect to="/dashboard" />
		) : (
			<SignInPage setLogin={setLogin} admin={true} />
		);
	};

	return (
		<Router>
			<Switch>
				{/* ROUTES FOR EMPLOYEES */}
				<Route
					exact
					path="/user/signin"
					render={() => checkSignIn()}
				/>
				<Route
					exact
					path="/user/signup"
					render={() => checkSignUp()}
				/>
				<Route
					exact
					path="/user/forgotPassword"
					render={() => checkForgotPassword()}
				/>

				{/* ROUTES FOR ADMINS */}
				<Route
					exact
					path="/admin/signin"
					render={() => checkAdminSignIn()}
				/>
				<Route
					exact
					path="/admin/dashboard"
					render={() => toAdminHome()}
				/>

				{/* DEFAULT ROUTES */}
				<Route exact path="/dashboard" render={() => toHome()} />
				<Route exact path="/" render={() => toHome()} />
			</Switch>
		</Router>
	);
}

export default App;
