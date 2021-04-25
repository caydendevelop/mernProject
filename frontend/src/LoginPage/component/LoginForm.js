import React, { useContext, useState, StrictMode } from "react";
import { Form, Input, Button, Modal} from "antd";
import { AuthContext } from "../../shared/context/auth-context";
import axios from 'axios'

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

const LoginForm = () => {
	const auth = useContext(AuthContext);
	const [failmessage, setFailMessage] = useState("");

	const [isModalVisible, setIsModalVisible] = useState(false);

  	const showModal = () => {
   	 	setIsModalVisible(true);
  	};

 	const handleOk = () => {
    	setIsModalVisible(false);
	
  	};

  	const handleCancel = () => {
    	setIsModalVisible(false);
  	};

	const onFinish = (values) => {
		console.log("Submit Login Success");
		axios
			.post(
				`http://localhost:5000/user/login`,
				{
					email: values.email,
					password: values.password,
				},
				{
					headers: { "Content-Type": "application/json" },
				}
			)
			.then(
        (response) => {
          console.log(response);
          auth.login(response.data.userId, response.data.token);
          return response.status;
        }
      )
			.catch( function (error) {
					console.log(error.response)
					setFailMessage(error.response.data.message)
					showModal()
			});
      
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<StrictMode>
			<Modal 
				title="Login Fail" 
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
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						pattern: "^[A-Za-z0-9._%+-]+@connect.hku.hk$",
						message: "Please input your email in @connect.hku.hk!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
		</StrictMode>
		
	);
};

export default LoginForm;
