import React from "react";
import { Link } from "react-router-dom";
import "./CourseDetailPage.css";
import { Button, Input, Descriptions } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CourseDetail from "./component/CourseDetail";
import CourseRating from "./component/CourseRating";

// const descriptionStyle = {
// 	marginTop: "1em",
// 	marginBottom: "2em"
// }

const CourseDetailPage = () => {
	return (
		<React.Fragment>
			<div className="courseDetail">
				<CourseDetail />
			</div>
			<div className="courseRating">
				<CourseRating />
			</div>
		</React.Fragment>
	);
};

export default CourseDetailPage;
