import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="iq-footer">
			<div className="container-fluid">
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div className="col-lg-6">
								<ul className="list-inline mb-0">
									<li className="list-inline-item">
										<Link
											to="/privacyPolicy"
											style={{
												color: "#F68122",
												fontWeight: "bold",
											}}
										>
											Privacy Policy
										</Link>
									</li>
									{"  "}
									&nbsp;
									<li className="list-inline-item">
										<Link
											to="/termsOfService"
											style={{
												color: "#F68122",
												fontWeight: "bold",
											}}
										>
											Terms of Use
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-6 text-right">
								<span
									className="mr-1"
									style={{
										color: "black",
										fontWeight: "bold",
									}}
								>
									{year} &#169;
								</span>
								<a
									href="https://www.bacancytechnology.com/"
									target="_blank"
									style={{
										color: "#F68122",
										fontWeight: "bold",
									}}
								>
									BACANCY
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
