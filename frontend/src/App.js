import React, { useState, useCallback, useEffect } from "react";
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
		localStorage.setItem('userData', JSON.stringify({userId: uid, token: token}));
		setUserId(uid);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		localStorage.removeItem('userData');
	}, []);

	useEffect( () => {
		const storedData = JSON.parse(localStorage.getItem('userData'));
		if (storedData && storedData.token) {
			login(storedData.userId, storedData.token);
		}
	}, [login]);

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
				<Route path="/user/:courseCode/addToTimetable" />
				<Redirect to="/" />
			</Switch>
		);
	} else {
		routes = ( //Here if use switch will not redirect
			<React.Fragment>
				<Route path="/" exact component={IndexPage} />
				<Route path="/signup" exact component={SignupPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/course" exact component={CourseListPage} />
				<Route path="/course/:courseCode" exact component={CoursePage} />
				<Route path="/timetable" exact component={TimetablePage} />
				<Redirect to="/" />
			</React.Fragment>
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
