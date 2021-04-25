import React, { useEffect, useState, useContext, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "./CoursePage.css";
import { Button, Result, Modal } from "antd";
import CourseDetail from "./component/CourseDetail";
import CourseRating from "./component/CourseRating";
import CourseReview from "./component/CourseReview";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";


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
	const auth = useContext(AuthContext);

	console.log(courseCode);

	let createReviewLink = "/course/" + courseCode + "/createreview";
	let userId = auth.userId;
	let token = auth.token;

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [failmessage, setFailMessage] = useState("");

  	const showModal = () => {
   	 	setIsModalVisible(true);
  	};

 	const handleOk = () => {
    	setIsModalVisible(false);
	
  	};

  	const handleCancel = () => {
    	setIsModalVisible(false);
  	};

	const addCourseFunc = (userId, courseCode, token) => {
		axios
			.post(
				`http://localhost:5000/user/${courseCode}/addToTimetable`,
				{
					userId: userId,
					// courseCode: courseCode 
				},
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization" : "Bearer " + token
					}
				}
			)
			.then((response) => response.status)
			.catch(function (error) {
				console.log(error.response)
				setFailMessage(error.response.data.message)
				showModal()
			});
	};

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
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	if (errorStatus === 404) {
		return (
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Link to="/course">
						<Button type="primary">Back to Course List</Button>
					</Link>
				}
				style={{ marginTop: "6em" }}
			/>
		);
	} else {
		return (
			<React.Fragment>
				<Modal 
				title="Add to timetable fail" 
				visible={isModalVisible} 
				onOk={handleOk}
				onCancel={handleCancel}
				footer={
				   <Button key="ok" onClick={handleOk}>
					Ok
				   </Button>
				}	
				>
				<p>{failmessage}</p>
      			</Modal>
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
					</div>

					<div className="createReviewDiv">
						{auth.isLoggedIn && (
							<React.Fragment>
								<Link to={createReviewLink}>
									<Button type="primary">Create Review</Button>
								</Link>

								<Button type="primary" onClick={() => addCourseFunc(userId, courseCode, token)}>Add to timetable</Button>
							</React.Fragment>
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
};

export default CoursePage;
