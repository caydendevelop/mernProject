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
import { Modal, Button } from "antd";

let logoutTimer;

const App = () => {
	const [token, setToken] = useState(null);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();
	const [userId, setUserId] = useState(null);
	const [userName, setUserName] = useState(null);

	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const login = useCallback((uid, userName, token, expirationDate) => {
		setToken(token);
		setUserId(uid);
		setUserName(userName);
		const tokenExpirationDate1 =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); // Date is a built in API in the browser and JS
		setTokenExpirationDate(tokenExpirationDate1);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				userId: uid,
				userName: userName,
				token: token,
				expiration: tokenExpirationDate1.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		setUserName(null);
		setTokenExpirationDate(null);
		setIsModalVisible(true);
		localStorage.removeItem("userData");
	}, []);

	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainingTime =
				tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (
			storedData &&
			storedData.userName &&
			storedData.token &&
			new Date(storedData.expiration) > new Date() // new Date() is the current timestamp
		) {
			login(
				storedData.userId,
				storedData.userName,
				storedData.token,
				new Date(storedData.expiration)
			);
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
				{/* <Redirect to="/" /> */}
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
				{/* <Redirect to="/" />  this would redirect to Index Page every Refresh!!*/}
			</React.Fragment>
		);
	}

	return (
		<>
			<Modal
				visible={isModalVisible}
				onOk={handleOk}
				footer={
					<Button key="ok" onClick={handleOk}>
						Ok
					</Button>
				}
			>
				<h3>Token expired. You are now logged out.</h3>
			</Modal>
			<AuthContext.Provider
				value={{
					isLoggedIn: !!token, // !!token : true if token is not null, else, false
					token: token,
					userId: userId,
					userName: userName,
					login: login,
					logout: logout,
				}}
			>
				<BrowserRouter>
					<Navbar />
					{routes}
				</BrowserRouter>
			</AuthContext.Provider>
		</>
	);
};

export default App;
