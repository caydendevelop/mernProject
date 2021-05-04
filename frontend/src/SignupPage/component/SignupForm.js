import {React, useState, StrictMode} from 'react';
import { Form, Input, Button, Modal } from 'antd';
import axios from "axios"
import { Redirect } from 'react-router';

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
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("")
  const [createdac, setcreatedac] = useState(false);

  	const showModal = () => {
   	 	setIsModalVisible(true);
  	};

 	  const handleOk = () => {
      setIsModalVisible(false);
      if (title === "Signup Success") {
        setcreatedac(true)
      }
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
    .then(function (response) {
      console.log(response.status)
      setMessage("Please login with your new account")
      setTitle("Signup Success")
      showModal()
    })
    .catch(function (error) {
      console.log(error.response)
      setTitle("Signup Failed")
      setMessage(error.response.data.message)
      showModal()
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (createdac) {
    return (<Redirect to="/" />)
  }

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
      <Form.Item
        label="UID"
        name="uid"
        rules={[
          {
            required: true,
            pattern: "^[3][0-9]{9}$",
            message: 'Please input valid uid (example : 3035000001)!',
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
            message: 'Please input your password with minimum eight characters, at least 1 uppercase + 1 lowercase + 1 number!',
            pattern: "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
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