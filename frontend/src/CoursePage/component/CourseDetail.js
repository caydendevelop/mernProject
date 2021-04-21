import React from "react";
import { Descriptions } from "antd";

const wholeStyle = {
	marginTop: "0.2em",
	marginBottom: "3em"
};
  

const CourseDetail = (props) => {

	
	return (
		<Descriptions
			title="Course Information"
			layout="vertical"
			contentStyle={wholeStyle}
			column={3}
		>

			{props.status ? 
			[
				<Descriptions.Item label="Course Code">{props.items.courseCode}</Descriptions.Item>, 
				<Descriptions.Item label="Name" span={2}>
					{props.items.name}
				</Descriptions.Item>,

				<Descriptions.Item label="Instructor">{props.items.instructor}</Descriptions.Item>,
				<Descriptions.Item label="Time" span={2}>
					{props.items.time}
				</Descriptions.Item>,

				<Descriptions.Item label="Description" span={2}>
					{props.items.description}
				</Descriptions.Item>
			]
 			: null}
		</Descriptions>
	);
};

export default CourseDetail;
