import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import IndexPage from "./IndexPage/IndexPage";
import SignupPage from "./SignupPage/SignupPage";
import LoginPage from "./LoginPage/LoginPage";
import CourseListPage from "./CourseListPage/CourseListPage";
import CoursePage from "./CoursePage/CoursePage";
import Navbar from "./shared/component/Navbar";
import CreateReviewPage from "./CreateReviewPage/CreateReviewPage";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(() => {
		setIsLoggedIn(true);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
	}, []);

	let routes;

	if (isLoggedIn) {
		routes = (
			<React.Fragment>
				<Route path="/" exact component={IndexPage} />
				<Route path="/course" exact component={CourseListPage} />
				<Route path="/course/:courseCode" exact component={CoursePage} />
				<Route
					path="/course/:courseCode/createreview"
					exact
					component={CreateReviewPage}
				/>
				<Redirect to="/" />
			</React.Fragment>
		);
	} else {
		routes = (
			<React.Fragment>
				<Route path="/" exact component={IndexPage} />
				<Route path="/signup" exact component={SignupPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/course" exact component={CourseListPage} />
				<Route path="/course/:courseCode" exact component={CoursePage} />
				{/* <Redirect to="/login" /> */}
				<Redirect to="/" />
			</React.Fragment>
		);
	}

	return (
		<AuthContext.Provider
			value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
		>
			<BrowserRouter>
				<Navbar />
				{routes}
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
