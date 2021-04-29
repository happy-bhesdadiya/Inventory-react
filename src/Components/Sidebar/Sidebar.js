import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ active }) => {
	return (
		<div
			className="iq-sidebar sidebar-default"
			style={{ backgroundColor: "#e0e0e6" }}
		>
			<div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
				<Link to="/dashboard">
					<img
						// src={logo}
						src="./images/logo.png"
						className="img-fluid rounded-normal light-logo"
						alt="Bacancy Logo"
					/>
					<h5 className="logo-title light-logo ml-3">BACANCY</h5>
				</Link>

				<div className="iq-menu-bt-sidebar ml-0">
					<i className="las la-bars wrapper-menu"></i>
				</div>
			</div>
			<div className="data-scrollbar" data-scroll="1">
				<nav className="iq-sidebar-menu">
					<ul id="iq-sidebar-toggle" className="iq-menu">
						<li className={active === "home" ? "active" : ""}>
							<Link to="/dashboard">
								<svg
									className="svg-icon"
									id="p-dash1"
									width="20"
									height="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
									<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
									<line
										x1="12"
										y1="22.08"
										x2="12"
										y2="12"
									></line>
								</svg>
								<span className="ml-4">Dashboard</span>
							</Link>
						</li>
						<li
							className={
								active === "request" ? "active" : ""
							}
						>
							<Link to="/viewRequests">
								<svg
									className="svg-icon"
									id="p-dash7"
									width="20"
									height="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
									<line
										x1="16"
										y1="13"
										x2="8"
										y2="13"
									></line>
									<line
										x1="16"
										y1="17"
										x2="8"
										y2="17"
									></line>
									<polyline points="10 9 9 9 8 9"></polyline>
								</svg>
								<span className="ml-4">
									View Requests
								</span>
							</Link>
							<ul
								id="reports"
								className="iq-submenu collapse"
								data-parent="#iq-sidebar-toggle"
							></ul>
						</li>
						<li
							className={
								active === "addStock" ? "active" : ""
							}
						>
							<Link to="/AddStock">
							<svg
								className="svg-icon"
								id="p-dash7"
								width="20"
								height="20"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="-1 -1 25 25"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
							<path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
							</svg>
							
								<span className="ml-4">
									Add Stock
								</span>
							</Link>
							<ul
								id="reports"
								className="iq-submenu collapse"
								data-parent="#iq-sidebar-toggle"
							></ul>
						</li>
					</ul>
				</nav>
			</div>
			
		</div>
	);
};

export default Sidebar;
