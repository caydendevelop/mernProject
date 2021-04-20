import React from "react";
import { Row, Col } from "antd";
import "./CourseReview.css";

const CourseReview = () => {
	return (
		<React.Fragment>
			<div className="courseReview">
				<Row gutter={16}>
					<Col span={12}>
						<Row>
							<Col span={24}>
								<div className="reviewUser">
									<h3>userName</h3>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div className="reviewComment">
									<p>
										This is comment safj sdafj dslaf lsda flskdf
										jlsakdjflksjflksajfl; sfs lfsdlkjsdlkf jslakdfjldsajfl;k
										sdjfl;dsjf;ldas;lsdfsfsafdsafd safdsaffds asadfdsaf
									</p>
								</div>
							</Col>
						</Row>
					</Col>
					<Col span={6}>
						<div className="reviewGrade">
							{/* need 1 extra div to apply the display:flex and align-item: center */}
							<div>
								<h2>Average Grade: </h2>
								<h1>B-</h1>
							</div>
						</div>
					</Col>
					<Col span={6}>
						<div className="reviewWorkload">
							<div>
								<h2>Average Workload: </h2>
								<h1>5/5</h1>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
};

export default CourseReview;
