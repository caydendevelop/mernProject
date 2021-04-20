import React from "react";
import { Link } from "react-router-dom";
import "./CourseListPage.css";
import { Button, Input, Collapse } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Panel } = Collapse;

const CoursePage = () => {
	return (
		<React.StrictMode>
			<div className="backgroundImageDiv">
				<div className="contentAboveBackgoundImage">
					<h1 className="h1_1_style">
						Here is all the course information you need
					</h1>
					<Search
						placeholder="Enter a course to search"
						prefix={<SearchOutlined />}
						allowClear
						enterButton
						size="large"
					/>
				</div>
			</div>

			<div className="courseListDiv">
				<Collapse bordered={false}>
					<Panel showArrow={false} header="Business School" key="1">
						<Link to="/course/ACCT1101">
							<a>ACCT1101 - Introduction to fin acct</a>
						</Link>
						<br />
						<Link to="course/ACCT2102">
							<a>ACCT2102 - Intermediate financial acct I</a>
						</Link>
					</Panel>

					<Panel showArrow={false} header="Faculty of Architecture" key="2">
						<Link to="/course/ARCH1029">
							<a>ARCH1029 - Introduction to Landscape Design</a>
						</Link>
						<br />
						<Link to="/course/RECO4004">
							<a>RECO4004 - Economics of property rights</a>
						</Link>
					</Panel>

					<Panel showArrow={false} header="Faculty of Arts" key="3">
						<Link to="/course/CHIN1101">
							<a>CHIN1101 - Creative writing</a>
						</Link>
						<br />
						<Link to="/course/JAPN1011">
							<a>JAPN1011 - Introduction to Japanese Studies</a>
						</Link>
					</Panel>

					<Panel showArrow={false} header="Faculty of Dentistry" key="4">
						<Link to="/course/DENT1001">
							<a>DENT1001 - Dentistry: Integrated Semester I</a>
						</Link>
						<br />
						<Link to="/course/DENT1002">
							<a>DENT1002 - Dentistry: Integrated Semester II</a>
						</Link>
					</Panel>

					<Panel showArrow={false} header="Faculty of Education" key="5">
						<Link to="/course/BBED3001">
							<a>BBED3001 - Catering for Diverse Learn</a>
						</Link>
						<br />
						<Link to="/course/BSIM3004">
							<a>BSIM3004 - Information retrieval</a>
						</Link>
					</Panel>

					<Panel showArrow={false} header="Faculty of Engineering" key="6">
						<Link to="/course/COMP2113">
							<a>COMP2113 - Programming technologies</a>
						</Link>
						<br />
						<Link to="/course/COMP3322">
							<a>COMP3322 - Modern Technologies on WWW</a>
						</Link>
					</Panel>

					<Panel showArrow={false} header="Faculty of Law" key="7">
						<Link to="/course/LLAW3123">
							<a>LLAW3123 - Competition law I</a>
						</Link>
						<br />
						<Link to="/course/LLAW3220">
							<a>LLAW3220 - Gender, Sexuality and the Law</a>
						</Link>
					</Panel>
					<Panel showArrow={false} header="Faculty of Sciences" key="8">
						<Link to="/course/BIOL1110">
							<a>BIOL1110 - From molecules to cells</a>
						</Link>
						<br />
						<Link to="/course/BIOC3606">
							<a>BIOC3606 - Molecular medicine</a>
						</Link>
					</Panel>
					<Panel showArrow={false} header="Faculty of Social Science" key="9">
						<Link to="/course/GEOG2132">
							<a>GEOG2132 - World cities</a>
						</Link>
						<br />
						<Link to="/course/PSYC2022">
							<a>PSYC2022 - Biological psychology</a>
						</Link>
					</Panel>
					<Panel
						showArrow={false}
						header="Li Ka Shing Faculty of Medicine"
						key="10"
					>
						<Link to="/course/BBMS2003">
							<a>BBMS2003 - Human Genetics</a>
						</Link>
						<br />
						<Link to="/course/BBMS3007">
							<a>BBMS3007 - Cancer Biology</a>
						</Link>
					</Panel>
				</Collapse>
			</div>
		</React.StrictMode>
	);
};

export default CoursePage;
