import React from "react";
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import IndexPage from './IndexPage/IndexPage'
import SignupPage from './SignupPage/SignupPage'
import LoginPage from './LoginPage/LoginPage'
import CourseListPage from './CourseListPage/CourseListPage'
import CoursePage from './CoursePage/CoursePage'
import Navbar from "./shared/component/Navbar";
import CreateReviewPage from "./CreateReviewPage/CreateReviewPage";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Route path="/" exact component={IndexPage}/>
			<Route path="/signup" exact component={SignupPage}/>
			<Route path="/login" exact component={LoginPage}/>
			<Route path="/course" exact component={CourseListPage}/>
			<Route path="/course/:courseCode" component={CoursePage}/>
			<Route path="/course/:courseCode/createreview" exact component={CreateReviewPage}/>
		</BrowserRouter>
	);
};

export default App;
