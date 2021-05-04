import React from "react";
import "./CourseRating.css";

const CourseRating = (props) => {

	console.log("props.grade is : " , props.grade);

	let averageGrade = "";
	switch (props.grade) {
		case 11:
			averageGrade = "A+";
			break;
		case 10:
			averageGrade = "A";
			break;
		case 9:
			averageGrade = "A-";
			break;
		case 8:
			averageGrade = "B+";
			break;
		case 7:
			averageGrade = "B";
			break;
		case 6:
			averageGrade = "B-";
			break;
		case 5:
			averageGrade = "C+";
			break;
		case 4:
			averageGrade = "C";
			break;
		case 3:
			averageGrade = "C-";
			break;
		case 2:
			averageGrade = "D+";
			break;
		case 1:
			averageGrade = "D";
			break;
		case 0:
			averageGrade = "F";
			break;
		default:
			averageGrade = "404 Not Found";
	}

	return (
		<React.Fragment>
			<div className="gradeDiv">
				<div>
					<h3>Average Grade: </h3>
					<h1>{averageGrade}</h1>
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
