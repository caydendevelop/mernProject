import {React, useState, StrictMode} from 'react';
import { Form, Input, Button, Modal } from 'antd';
import axios from "axios"

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

const SignupForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [failmessage, setFailMessage] = useState("");

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
    console.log('Submit Register Form Success');
    axios.post(`http://localhost:5000/user/signup`, {
      uid: values.uid,
      userName: values.userName,
      email: values.email,
      password: values.password
    }, { 
      headers: { "Content-Type": "application/json" },
    })
    .then(response => response.status)
    .catch(function (error) {
      console.log(error.response)
      setFailMessage(error.response.data.message)
      showModal()
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StrictMode>
    <Modal 
				title="Signup Fail" 
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
        label="UID"
        name="uid"
        rules={[
          {
            required: true,
            pattern: "^[3][0-9]{9}$",
            message: 'Please input valid uid (example : 303500001)!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            pattern: "^[A-Za-z0-9._%+-]+@connect.hku.hk$",
            message: 'Please input valid HKU email (with example@connect.hku.hk)!',
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
            message: 'Please input your password with minimum eight characters, at least one letter and one number!',
            pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
    </StrictMode>
  );
};

export default SignupForm;