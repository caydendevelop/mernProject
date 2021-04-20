import React from "react";
import { Link } from "react-router-dom";
import "./CoursePage.css";
import { Button } from "antd";
import CourseDetail from "./component/CourseDetail";
import CourseRating from "./component/CourseRating";
import CourseReview from "./component/CourseReview";

const dividerStyle = {
	marginTop: "1em",
	marginBottom: "1em",
	height: "1px",
	color: "#c1c1c1",
	backgroundColor: "#c1c1c1",
	border: "none",
};

const CoursePage = () => {
	return (
		<React.Fragment>
			<div className="coursePage">
				<div className="courseDetailDiv">
					<CourseDetail />
				</div>

				<div className="courseRatingDiv">
					<CourseRating />
				</div>

				<hr style={dividerStyle} />

				<h2 className>User Review</h2>

				<div className="courseReviewDiv">
					<CourseReview />
					<CourseReview />
				</div>

				<div className="createReviewDiv">
					<Link to='/course/:coursecode/createreview'><Button type="primary">Create Review</Button></Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CoursePage;
