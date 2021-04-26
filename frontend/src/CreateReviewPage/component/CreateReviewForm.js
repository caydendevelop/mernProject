import React , {StrictMode, useContext, useState} from "react";
import axios from "axios";
import { Redirect} from "react-router-dom";
import { Form, Input, Button, Select, Modal } from "antd";
import { useParams } from "react-router-dom";
import {AuthContext} from '../../shared/context/auth-context';

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
	const auth = useContext(AuthContext);

	const [message, setMessage] = useState("");
	const [title, setTitle] = useState("")
	const [submittedre, setSubmittedre] = useState(false)
	const [path, setPath] = useState("")

	const [isModalVisible, setIsModalVisible] = useState(false);

  	const showModal = () => {
   	 	setIsModalVisible(true);
  	};

 	const handleOk = () => {
    	setIsModalVisible(false);
		setPath("/course/" + courseCode)
		console.log(path)
		setSubmittedre(true);
  	};

  	const handleCancel = () => {
    	setIsModalVisible(false);
  	};

	const onFinish = (values) => {
		console.log("Success:", values);

		axios
			.post(
				`http://localhost:5000/course/${values.courseCode}/createReview`,
				{
					creator: values.creator,
					grade: values.grade,
					workload: values.workload,
					comment: values.comment,
				},
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization" : "Bearer " + values.token
					},
				}
			)
			.then(function (response) {
				console.log(response.status)
				setTitle("Create Review Success")
				setMessage("Your review has been created")
				showModal()
			})
			.catch(function (error) {
				console.log(error.response)
				setTitle("Create Review Failed")
				setMessage(error.response.data.message)
				showModal()
			});
	};

	if (submittedre) {
		return (<Redirect to={path} />) 
	}

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<StrictMode>
		<Modal 
				title={title}
				visible={isModalVisible} 
				onOk={handleOk}
				onCancel={handleCancel}
				footer={
				   <Button key="ok" onClick={handleOk}>
					Ok
				   </Button>
				}	
			>
				<p>{message}</p>
      		</Modal>
		<Form
			{...layout}
			name="basic"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item name="courseCode" hidden="true" initialValue={courseCode} />
			<Form.Item name="token" hidden="true" initialValue={auth.token} />
			<Form.Item name="creator" hidden="true" initialValue={auth.userId} />

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
				rules={[
					{
						required: true,
						message: "Please input the comment!",
					},
				]}
			>
				<Input.TextArea />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
		</StrictMode>
	);
};

export default CreateReviewForm;
