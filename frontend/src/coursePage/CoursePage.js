import React from "react";
import { Link } from "react-router-dom";
import "./CoursePage.css";
import CourseDetail from "./component/CourseDetail";
import CourseRating from "./component/CourseRating";
import CourseReview from "./component/CourseReview";

const dividerStyle = {
	width: "70%",
	marginLeft: "15%",
	marginRight: "15%",
	marginTop: "1em",
	marginBottom: "1em",
	height: "1px",
  color: "#c1c1c1",
  backgroundColor: "#c1c1c1",
  border: "none"
};

const CoursePage = () => {
	return (
		<React.Fragment>
			<div className="courseDetail">
				<CourseDetail />
			</div>
			
			<div className="courseRating">
				<CourseRating />
			</div>
			<hr style={dividerStyle} />
			<div className="courseReview">
				<CourseReview />
			</div>
		</React.Fragment>
	);
};

export default CoursePage;
