import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
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

	const onFinish = (values) => {
		console.log("Submit Login Form Success");
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
			.catch((err) => console.warn(err.response));
      
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
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						message: "Please input your email!",
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
	);
};

export default LoginForm;
