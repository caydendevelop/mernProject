import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./Navbar.css";

const { SubMenu } = Menu;

const Navbar = () => {
	const [current, setCurrent] = useState("indexPage");

	const navBarStyle = {
		fontSize: "16px",
	};

  const subNavBarStyle = {
    float: "right",
    paddingTop: "2px"

  }

	return (
		<Menu
			onClick={(e) => setCurrent(e.key)}
			selectedKeys={current}
			mode="horizontal"
			style={navBarStyle}
		>
			<Menu.Item key="logo">
				<Link to="/">
					<img src="/img/logo1.png" alt="logo" className="logoStyle" />
				</Link>
			</Menu.Item>

			<Menu.Item key="IndexPage">
				<Link to="/">
					Index Page
				</Link>
			</Menu.Item>
			<Menu.Item key="CourseListPage">
				<Link to="/course">
					Course List Page
				</Link>
			</Menu.Item>
			<Menu.Item key="AuthenticationPage">
				<Link to="/authenticate">
					Authentication Page
				</Link>
			</Menu.Item>

			<Menu.Item key="testing">
				<Link to="/course/coursecode">
					Testing
				</Link>
			</Menu.Item>
	
		</Menu>
	);
};

export default Navbar;
