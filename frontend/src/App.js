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
import TimetablePage from "./TimetablePage/TimetablePage";

const App = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = useCallback((uid, token) => {
		setToken(token);
		setUserId(uid);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
	}, []);

	let routes;

	if (token) {
		routes = (
			<Switch>
				<Route path="/" exact component={IndexPage} />
				<Route path="/course" exact component={CourseListPage} />
				<Route path="/course/:courseCode" exact component={CoursePage} />
				<Route
					path="/course/:courseCode/createreview"
					exact
					component={CreateReviewPage}
				/>
				<Route path="/timetable" exact component={TimetablePage} />
				<Redirect to="/course" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/" exact component={IndexPage} />
				<Route path="/signup" exact component={SignupPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/course" exact component={CourseListPage} />
				<Route path="/course/:courseCode" exact component={CoursePage} />
			</Switch>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token, // !!token : true if token is not null, else, false
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}} 
		>
			<BrowserRouter>
				<Navbar />
				{routes}
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
