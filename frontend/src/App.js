import React from "react";
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import IndexPage from './indexPage/IndexPage'
import CoursePage from './coursePage/CoursePage'
import CourseDetailPage from './coursePage/courseDetailPage/CourseDetailPage'
import Navbar from "./shared/component/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Route path="/" exact component={IndexPage}/>
			<Route path="/course" exact component={CoursePage}/>
			<Route path="/course/coursecode" exact component={CourseDetailPage}/>
		</BrowserRouter>
	);
};

export default App;
