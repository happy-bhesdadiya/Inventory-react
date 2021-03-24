import React from "react";

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
										<a href="../backend/privacy-policy.html">
											Privacy Policy
										</a>
									</li>
									<li className="list-inline-item">
										<a href="../backend/terms-of-service.html">
											Terms of Use
										</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-6 text-right">
								<span
									className="mr-1"
									style={{ color: "#F68122" }}
								>
									{/* <script
										data-cfasync="false"
										src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
									></script> */}
									{year} ©
								</span>
								<a
									href="https://www.bacancytechnology.com/"
									target="_blank"
									style={{ color: "#F68122" }}
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
