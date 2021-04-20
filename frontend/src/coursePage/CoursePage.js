import React from "react";
import "./CoursePage.css";
import { Button, Input, Collapse } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Panel } = Collapse;
const text = "ddgdsgd";

const CoursePage = () => {
	return (
		<React.StrictMode>
			<div className="coursePageBackgroundImage">
				<div className="contentAboveBackgoundImage">
					<h1 className="h1_1_style">
						Here is all the course information you need
					</h1>
					<Search
						placeholder="Enter a course to search"
						prefix={<SearchOutlined />}
						allowClear
						enterButton
					/>
				</div>
			</div>

			<div className="coursePage_1st">
				<Collapse bordered={false}>
					<Panel showArrow={false} header="Business School" key="1">
						<a>ACCT1101 - Introduction to fin acct</a>
						<br />
						<a>ACCT2102 - Intermediate financial acct I</a>
					</Panel>

					<Panel showArrow={false} header="Faculty of Architecture" key="2">
						<a>ARCH1029 - Introduction to Landscape Design</a>
						<br />
						<a>RECO4004 - Economics of property rights</a>
					</Panel>

					<Panel showArrow={false} header="Faculty of Arts" key="3">
						<a>CHIN1101 - Creative writing</a>
						<br />
						<a>JAPN1011 - Introduction to Japanese Studies</a>
					</Panel>

					<Panel showArrow={false} header="Faculty of Dentistry" key="4">
						<a>DENT1001 - Dentistry: Integrated Semester I</a>
						<br />
						<a>DENT1002 - Dentistry: Integrated Semester II</a>
					</Panel>

					<Panel showArrow={false} header="Faculty of Education" key="5">
						<a>BBED3001 - Catering for Diverse Learn</a>
						<br />
						<a>BSIM3004 - Information retrieval</a>
					</Panel>

					<Panel showArrow={false} header="Faculty of Engineering" key="6">
						<a>COMP3322 - Modern Technologies on WWW</a>
						<br />
						<a>COMP2113 - Programming technologies</a>
					</Panel>

					<Panel showArrow={false} header="Faculty of Law" key="7">
						<a>LLAW3123 - Competition law I</a>
						<br />
						<a>LLAW3220 - Gender, Sexuality and the Law</a>
					</Panel>
					<Panel showArrow={false} header="Faculty of Sciences" key="8">
						<a>BIOL1110 - From molecules to cells</a>
						<br />
						<a>BIOC3606 - Molecular medicine</a>
					</Panel>
					<Panel showArrow={false} header="Faculty of Social Science" key="9">
						<a>GEOG2132 - World cities</a>
						<br />
						<a>PSYC2022 - Biological psychology</a>
					</Panel>
					<Panel
						showArrow={false}
						header="Li Ka Shing Faculty of Medicine"
						key="10"
					>
						<a>BBMS2003 - Human Genetics</a>
						<br />
						<a>BBMS3007 - Cancer Biology</a>
					</Panel>
				</Collapse>
			</div>
		</React.StrictMode>
	);
};

export default CoursePage;
