import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "./../../assets/logo.png";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	let history = useHistory();
	return (
		<div>
			<div className="wrapper">
				<section className="login-content">
					<div className="container">
						<div className="row align-items-center justify-content-center height-self-center">
							<div className="col-lg-8">
								<div className="card auth-card">
									<div className="card-body p-0">
										<div className="d-flex align-items-center auth-content">
											<div className="col-lg-7 align-self-center">
												<div
													className="p-3"
													style={{
														textAlign:
															"center",
													}}
												>
													<h2 className="mb-2">
														Reset
														Password
													</h2>
													<p>
														Enter your
														email
														address
														and we'll
														send you
														an email
														with
														instructions
														to reset
														your
														password.
													</p>
													<form>
														<div className="row">
															<div className="col-lg-12">
																<div className="floating-label form-group">
																	<input
																		className="floating-input form-control"
																		type="email"
																		onChange={(
																			e
																		) =>
																			setEmail(
																				e
																					.target
																					.value
																			)
																		}
																		placeholder=" "
																	/>
																	<label>
																		Enter
																		your
																		Email
																	</label>
																</div>
															</div>
														</div>
														<p className="mt-3">
															Got
															the
															Password
															?
															&nbsp;&nbsp;&nbsp;
															<button
																type="button"
																style={{
																	border:
																		"none",
																	backgroundColor:
																		"inherit",
																	color:
																		"#F68122",
																}}
																onClick={() => {
																	history.replace(
																		"/user/signin"
																	);
																}}
															>
																Sign
																In
															</button>
														</p>
														<button
															type="submit"
															style={{
																backgroundColor:
																	"#F68122",
																borderStyle:
																	"solid",
																borderColor:
																	"#F68122",
															}}
															className="btn btn-primary"
														>
															Reset
															Password
														</button>
													</form>
												</div>
											</div>
											<div className="col-lg-5 content-right">
												<img
													// src="./images/logo.png"
													src={logo}
													class="img-fluid image-right"
													style={{
														borderRadius:
															"50%",
													}}
													alt="Bacancy Inventory Portal"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ForgotPassword;
