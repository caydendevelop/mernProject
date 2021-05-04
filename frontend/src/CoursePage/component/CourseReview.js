import React from "react";
import { Row, Col } from "antd";
import "./CourseReview.css";

const CourseReview = (props) => {
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
			<div className="courseReview">
				<Row gutter={16}>
					<Col span={12}>
						<Row>
							<Col span={24}>
								<div className="reviewUser">
									<h3>{props.userName.userName}</h3>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div className="reviewComment">
									<p>
										{props.comment}
									</p>
								</div>
							</Col>
						</Row>
					</Col>
					<Col span={6}>
						<div className="reviewGrade">
							{/* need 1 extra div to apply the display:flex and align-item: center */}
							<div>
								<h2>Grade: </h2>
								<h1>{averageGrade}</h1>
							</div>
						</div>
					</Col>
					<Col span={6}>
						<div className="reviewWorkload">
							<div>
								<h2>Workload: </h2>
								<h1>{props.workload}</h1>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
};

export default CourseReview;
