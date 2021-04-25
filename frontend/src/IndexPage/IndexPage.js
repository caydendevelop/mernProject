import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./IndexPage.css";
import { Button } from "antd";
import { AuthContext } from "../shared/context/auth-context";

const IndexPage = () => {
	const auth = useContext(AuthContext);

	let routes 
	if (auth.isLoggedIn) {
		routes = (
			<h5 className="h5_3_style"> <br></br> Welcome Back! </h5>
		);
	}
	else {
		routes = (
			<div className="buttonDiv">
				<span>
					<h5 className="h5_2_style">Don't have an account?</h5>
					<Link to="/signup">
						<Button type="primary"> Signup</Button>
					</Link>
				</span>
				<span>
					<h5 className="h5_2_style">Here to begin</h5>
					<Link to="/login">
						<Button type="primary"> Login</Button>
					</Link>
				</span>
			</div>
		);
	}
	return (
		<React.StrictMode>
			<div className="indexPageBackgroundImage">
				<div >
					<h2 className="h2_1_style">Welcome to Consilio</h2>
					<h5 className="h5_1_style">
						Discussion and rating platform for courses
					</h5>
					{routes}
				</div>
			</div>
		</React.StrictMode>
	);
};

export default IndexPage;
