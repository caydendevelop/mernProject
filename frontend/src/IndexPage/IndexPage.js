import React from "react";
import "./IndexPage.css";
import { Button } from "antd";
const IndexPage = () => {
	return (
		<React.StrictMode>
			<div className="indexPageBackgroundImage">
				<div className="indexContent">
					<h2 className="h2_1_style">Welcome to Consilio</h2>
					<h5 className="h5_1_style">
						Discussion and rating platform for courses
					</h5>
					<div className="buttonDiv">
						<span>
							<h5 className="h5_2_style">Don't have an account?</h5>
							<Button type="primary">Register</Button>
						</span>
						<span>
							<h5 className="h5_2_style">Here to begin</h5>
							<Button type="primary">Login</Button>
						</span>
						
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
};

export default IndexPage;
