import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import { Descriptions } from "antd";
import axios from 'axios'

const wholeStyle = {
	marginTop: "0.2em",
	marginBottom: "3em"
};
  

const CourseDetail = () => {

	const [courseDetail, setCourseDetail] = useState(null)
	const [hasLoaded, setHasLoaded] = useState(false)

	useEffect (() => {
		axios
			.get(`http://localhost:5000/course/COMP3322`)
			.then(res => {
		console.log(res)
		setCourseDetail(res.data)
		setHasLoaded(true)
			})
			.catch(err => {
				console.log(err)
			})
	})
	
	return (
		<Descriptions
			title="Course Information"
			layout="vertical"
			contentStyle={wholeStyle}
			column={3}
		>
			{/* {courseDetail.course.courseCode} */}
			{/* {courseDetail.course.instructor} */}
			{hasLoaded ? 
			[
				<Descriptions.Item label="Course Code">{courseDetail.course.courseCode}</Descriptions.Item>, 
				<Descriptions.Item label="Name" span={2}>
					{courseDetail.course.name}
				</Descriptions.Item>,

				<Descriptions.Item label="Instructor">{courseDetail.course.instructor}</Descriptions.Item>,
				<Descriptions.Item label="Time" span={2}>
					{courseDetail.course.time}
				</Descriptions.Item>,

				<Descriptions.Item label="Description" span={2}>
					{courseDetail.course.description}
				</Descriptions.Item>
			]
 			: null}
		</Descriptions>
	);
};

export default CourseDetail;
