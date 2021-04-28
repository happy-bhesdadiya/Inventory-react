import React, { useContext, useState } from "react";
import { kBaseUrl } from "./../../constants";
// import { setCookie } from "./../../utils";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import logo from "./../../assets/logo.png";
import Spinner from "../../spinner";

const SignUpPage = (props) => {
	let history = useHistory();
	const [loggedIn, setLoggedIn] = useState(props.loggedIn);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [branch, setBranch] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);
	const [disableSignUp, setDisableSignUp] = useState(false);

	const { setUserProfile } = useContext(UserContext);

	const handleSignUp = (e) => {
		e.preventDefault();
		setError(false);
		setDisableSignUp(true);
		setLoading(true);

		setName(name.trim());
		setEmail(email.trim());
		setBranch(branch.trim());
		setMobile(mobile.trim());
		setPassword(password.trim());
		setConfirmPassword(confirmPassword.trim());

		if (
			name.length > 7 &&
			checkConfirmPassword() &&
			email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			fetch(kBaseUrl + "/user/signup", {
				body: JSON.stringify({
					name: name,
					email: email,
					mobile_number: mobile,
					branch_id: branch,
					password: password,
					is_admin: props.admin,
				}),
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				method: "POST",
			})
				.then((res) => {
					if (res.status === 201) {
						return res.json();
					} else {
						setName("");
						setEmail("");
						setMobile("");
						setBranch("");
						setPassword("");
						setConfirmPassword("");
						setLoading(false);
						setError(true);
						setDisableSignUp(false);
					}
				})
				.then((resJSON) => {
					const { data } = resJSON;
					// const accessToken = "access-token";
					// const token = data.token;
					// setCookie(accessToken, token);
					setUserProfile(data);
				})
				.then(() => {
					props.setLogin();
				})
				.then(() => {
					history.replace("/dashboard");
				})
				.catch((e) => {
					console.log(e);
					console.log("Something Went Wrong !");
				})
				.finally(() => {
					setDisableSignUp(false);
					setLoading(false);
				});
		} else {
			console.log("Error in User Data");
			setName("");
			setEmail("");
			setMobile("");
			setBranch("");
			setPassword("");
			setConfirmPassword("");
			setLoading(false);
			setError(true);
			setDisableSignUp(false);
		}
	};

	const checkConfirmPassword = () => {
		return password === confirmPassword;
	};

	return (
		<div>
			{loading ? (
				<Spinner size={100} loading={loading} />
			) : (
				<div className="wrapper">
					<section className="login-content">
						<div className="container">
							<div className="row align-items-center justify-content-center height-self-center">
								<div className="col-lg-8">
									<div className="card auth-card">
										<div className="card-body p-0">
											<div className="d-flex align-items-center auth-content">
												<div className="col-lg-7 align-self-center">
													<div className="p-3">
														<h2
															className="mb-2"
															style={{
																textAlign:
																	"center",
															}}
														>
															Sign
															Up
														</h2>
														<p
															style={{
																textAlign:
																	"center",
																color:
																	"red",
																fontWeight:
																	"bold",
															}}
														>
															{error
																? "Make sure you have entered Valid user Data"
																: ""}
														</p>
														<form
															style={{
																textAlign:
																	"center",
															}}
															onSubmit={
																handleSignUp
															}
														>
															<div className="row">
																<div className="col-lg-6">
																	<div className="floating-label form-group">
																		<input
																			className="floating-input form-control"
																			type="text"
																			value={
																				name
																			}
																			placeholder=" "
																			onChange={(
																				e
																			) =>
																				setName(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
																		<label>
																			Full
																			Name
																		</label>
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="floating-label form-group">
																		<input
																			className="floating-input form-control"
																			type="email"
																			value={
																				email
																			}
																			placeholder=" "
																			onChange={(
																				e
																			) =>
																				setEmail(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
																		<label>
																			Email{" "}
																		</label>
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="floating-label form-group">
																		<input
																			className="floating-input form-control"
																			type="text"
																			pattern="[7-9]{1}[0-9]{9}"
																			maxLength="10"
																			value={
																				mobile
																			}
																			placeholder=" "
																			onChange={(
																				e
																			) =>
																				setMobile(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
																		<label>
																			Mobile
																			Number
																		</label>
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="floating-label form-group">
																		<select
																			id="branchList"
																			name="type"
																			className="form-control"
																			// className="selectpicker form-control"
																			data-style="py-0"
																			value={
																				branch
																			}
																			onChange={(
																				e
																			) =>
																				setBranch(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		>
																			<option value="">
																				{" "}
																				Branch{" "}
																			</option>
																			<option value="1">
																				8th
																				Floor,
																				Thaltej
																			</option>
																			<option value="2">
																				12th
																				Floor,
																				Thaltej
																			</option>
																			<option value="3">
																				Gift
																				City,
																				Gandhinagar
																			</option>
																		</select>
																		{/* <input className="floating-input form-control" type="text" placeholder=" "> */}
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="floating-label form-group">
																		<input
																			className="floating-input form-control"
																			type="password"
																			value={
																				password
																			}
																			placeholder=" "
																			onChange={(
																				e
																			) =>
																				setPassword(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
																		<label>
																			Password
																		</label>
																	</div>
																</div>
																<div className="col-lg-6">
																	<div className="floating-label form-group">
																		<input
																			className="floating-input form-control"
																			type="password"
																			value={
																				confirmPassword
																			}
																			placeholder=" "
																			onChange={(
																				e
																			) =>
																				setConfirmPassword(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
																		<label>
																			Confirm
																			Password
																		</label>
																	</div>
																</div>
															</div>
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
																disabled={
																	disableSignUp
																}
															>
																Sign
																Up
															</button>
															<p className="mt-3">
																Already
																have
																an
																Account
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
														</form>
													</div>
												</div>
												<div className="col-lg-5 content-right">
													<img
														style={{
															borderRadius:
																"50%",
														}}
														// src="./images/logo.png"
														src={logo}
														className="img-fluid image-right"
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
			)}
		</div>
	);
};

export default SignUpPage;
