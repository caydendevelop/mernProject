import React from "react";
import axios from 'axios';
import { Form, Input, Button, Select } from "antd";
import { useParams } from "react-router-dom";

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 8,
	},
};

const CreateReviewForm = () => {
	const courseCode = useParams().courseCode;
	

	const onFinish = (values) => {
		console.log("Success:", values);
		
		axios.post(`http://localhost:5000/course/${values.courseCode}/createReview`, {
      	creator: "6082a4841d96c12dacedaa81",
      	grade: values.grade,
      	workload: values.workload,
      	comment: values.comment
		}, { 
		headers: { "Content-Type": "application/json" },
		})
		.then(response => response.status)
		.catch(err => console.warn(err.response.data.message));
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			{...layout}
			name="basic"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				name="courseCode"
				hidden="true"
				initialValue={courseCode}
			/>

			<Form.Item
				label="Grade"
				name="grade"
				rules={[
					{
						required: true,
						message: "Please choose your grade!",
					},
				]}
			>
				<Select allowClear>
					<Select.Option value="11">A+</Select.Option>
					<Select.Option value="10">A</Select.Option>
					<Select.Option value="9">A-</Select.Option>
					<Select.Option value="8">B+</Select.Option>
					<Select.Option value="7">B</Select.Option>
					<Select.Option value="6">B-</Select.Option>
					<Select.Option value="5">C+</Select.Option>
					<Select.Option value="4">C</Select.Option>
					<Select.Option value="3">C-</Select.Option>
					<Select.Option value="2">D+</Select.Option>
					<Select.Option value="1">D</Select.Option>
					<Select.Option value="0">F</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Workload"
				name="workload"
				rules={[
					{
						required: true,
						message: "Please choose the workload!",
					},
				]}
			>
				<Select allowClear>
					<Select.Option value="5">5</Select.Option>
					<Select.Option value="4">4</Select.Option>
					<Select.Option value="3">3</Select.Option>
					<Select.Option value="2">2</Select.Option>
					<Select.Option value="1">1</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Comment"
				name="comment"
				rules={
					[
						{
						  required: true,
						  message: 'Please input the comment!',
						},
					]
				}
			>
				<Input.TextArea />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateReviewForm;
