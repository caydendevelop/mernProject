import React, { useState, useContext, useEffect, useCallback } from "react";
import Calender from "./component/Calender";
import "./TimetablePage.css";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";

const TimetablePage = () => {
	const [loadedUser, setLoadedUser] = useState({});
	const [hasLoaded, setHasLoaded] = useState(false);

	const auth = useContext(AuthContext);
	let userId = auth.userId;
	let token = auth.token;

	useEffect(() => {
		axios
			.get(`http://localhost:5000/user/getUser/${userId}`)
			.then((res) => {
				setLoadedUser(res.data);
				setHasLoaded(true);
        
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

  
  console.log(loadedUser);


	return (
		<React.Fragment>
			<div className="timatablePage">
				<h1 className="h1_title">Timetable</h1>
				<Calender courseArray={loadedUser} />
				{/* <Calender /> */}
			</div>
		</React.Fragment>
	);
};

export default TimetablePage;
