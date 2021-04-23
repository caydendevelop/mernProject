import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CoursePage.css";
import { Button, Result } from "antd";
import CourseDetail from "./component/CourseDetail";
import CourseRating from "./component/CourseRating";
import CourseReview from "./component/CourseReview";
import axios from "axios";

const dividerStyle = {
	marginTop: "1em",
	marginBottom: "1em",
	height: "1px",
	color: "#c1c1c1",
	backgroundColor: "#c1c1c1",
	border: "none",
};

const CoursePage = () => {
	const [loadedCourse, setLoadedCourse] = useState(null);
	const [hasLoaded, setHasLoaded] = useState(false);

	const [loadedReview, setLoadedReview] = useState([]);
	const [hasLoaded2, setHasLoaded2] = useState(false);

	const courseCode = useParams().courseCode;

	const [errorStatus, setErrorStatus] = useState();

	console.log(courseCode);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/course/${courseCode}`)
			.then((res) => {
				setLoadedCourse(res.data.course);
				setHasLoaded(true);
			})
			.catch((err) => {
				setErrorStatus(err.response.status);
			});

		axios
			.get(`http://localhost:5000/course/${courseCode}/review`)
			.then((res) => {
				setLoadedReview(res.data.review);
				setHasLoaded2(true);
				console.log(loadedReview);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	if (errorStatus == 404) {
		return (
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={<Link to="/course"><Button type="primary">Back to Course List</Button></Link>}
				style={{ marginTop: '6em' }}
				
			/>
		);
	} else {
		return (
			<React.Fragment>
				<div className="coursePage">
					<div className="courseDetailDiv">
						<CourseDetail items={loadedCourse} status={hasLoaded} />
					</div>

					<div className="courseRatingDiv">
						<CourseRating />
					</div>

					<hr style={dividerStyle} />

					<h2>User Review</h2>

					<div className="courseReviewDiv">
						{loadedReview.map((rev) => (
							<CourseReview
								userName={rev.creator}
								comment={rev.comment}
								grade={rev.grade}
								workload={rev.workload}
							/>
						))}

						{/* <CourseReview items={loadedReview[0]} /> */}
					</div>

					<div className="createReviewDiv">
						<Link to="/course/:coursecode/createreview">
							<Button type="primary">Create Review</Button>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
};

export default CoursePage;
