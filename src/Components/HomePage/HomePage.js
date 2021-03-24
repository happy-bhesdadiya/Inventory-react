import React, { useState, useContext } from "react";
import { kBaseUrl } from "../../constants";
import { UserContext } from "../../Context/UserContext";
import { getCookie } from "../../utils";
import Footer from "./../Footer/Footer";
import Sidebar from "./../Sidebar/Sidebar";

const HomePage = () => {
	const accessToken = getCookie("access-token");
	const [user, setUser] = useState({});
	const [name, setName] = useState("");

	const handleHome = (e) => {
		e.preventDefault();
		console.log(UserContext);
		// fetch(kBaseUrl + "/user/viewProfile", {
		// 	credentials: "include",
		// 	method: "GET",
		// }).then(async (res) => {
		// 	if (res.status === 200) {
		// 		const resJSON = await res.json();
		// 		const { data } = resJSON;
		// 		setUser(data);
		// 		setName(data.user_name);
		// 	}
		// });
	};

	return (
		// <div>
		// 	<button className="btn btn-primary" onClick={handleHome}> Get Data </button>
		// 	{/* <p> { Object.entries(user).forEach(([key, value]) => console.log(`${key} ${value}`); })} </p> */}
		// 	{name}
		// </div>
		<div>
			<Sidebar />
			<Footer />
		</div>
	);
};

export default HomePage;
