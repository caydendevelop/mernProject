import React from "react";
import "./CourseRating.css";

const CourseRating = (props) => {
	return (
		<React.Fragment>
			<div className="gradeDiv">
				<div>
					<h3>Average Grade: </h3>
					<h1>A-</h1>
				</div>
			</div>

			<div className="workloadDiv">
				<div>
					<h3>Average Workload: </h3>
					<h1>{props.workload}</h1>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CourseRating;
