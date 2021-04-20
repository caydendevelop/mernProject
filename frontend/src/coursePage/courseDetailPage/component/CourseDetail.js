import React from "react";
import { Descriptions } from "antd";

const wholeStyle = {
	marginTop: "0.2em",
	marginBottom: "3em"
};

const CourseDetail = () => {
	return (
		<Descriptions
			title="Course Information"
			layout="vertical"
			contentStyle={wholeStyle}
		>
			<Descriptions.Item label="Course Code">COMP3322</Descriptions.Item>
			<Descriptions.Item label="Name" span={2}>
				Modern Technologies on World Wide Web
			</Descriptions.Item>

			<Descriptions.Item label="Instructor">Tam Anthony</Descriptions.Item>

			<Descriptions.Item label="Time" span={2}>
				Mon 9:30AM - 11:20AM, Fri 9:30AM - 11:20AM
			</Descriptions.Item>
			<Descriptions.Item label="Description" span={3}>
				Basics on Internet and network protocols (TCP and IP); Internet
				applications; Domain Name System; World Wide Web; Web addressing; HTTP;
				HTML, XML, style sheets, etc.; programming the Web: PHP, JavaScript,
				etc.; other topics of current interest (AJAX, HTML5, web services, cloud
				computing). This course may not be taken with BUSI0063.
			</Descriptions.Item>
		</Descriptions>
	);
};

export default CourseDetail;
