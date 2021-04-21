import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./CoursePage.css";
import { Button } from "antd";
import CourseDetail from "./component/CourseDetail";
import CourseRating from "./component/CourseRating";
import CourseReview from "./component/CourseReview";
import axios from 'axios';

const dividerStyle = {
	marginTop: "1em",
	marginBottom: "1em",
	height: "1px",
	color: "#c1c1c1",
	backgroundColor: "#c1c1c1",
	border: "none",
};

const CoursePage = () => {

	const [courseDetail, setCourseDetail] = useState(null)
	const [hasLoaded, setHasLoaded] = useState(false)

	useEffect (() => {
		axios
			.get(`http://localhost:5000/course/COMP3322`)
			.then(res => {
		console.log(res)
		setCourseDetail(res.data.course)
		setHasLoaded(true)
			})
			.catch(err => {
				console.log(err)
			})
	})


	return (
		<React.Fragment>
			<div className="coursePage">
				<div className="courseDetailDiv">
					<CourseDetail items={courseDetail} status={hasLoaded}/>
				</div>

				<div className="courseRatingDiv">
					<CourseRating />
				</div>

				<hr style={dividerStyle} />

				<h2>User Review</h2>

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
