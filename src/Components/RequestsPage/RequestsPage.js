import React, { useEffect, useState } from "react";
import Spinner from "../../spinner";
import Footer from "../Footer/Footer";
import MyRequestsContent from "../MyRequestsContent/MyRequestsContent";
import Sidebar from "../Sidebar/Sidebar";
import { kBaseUrl } from "../../constants";

const RequestsPage = () => {
	const [loading, setLoading] = useState(true);
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		fetch(kBaseUrl + "/user/getMyRequests", {
			credentials: "include",
			method: "GET",
		})
			.then((res) => {
				return res.json();
			})
			.then((resJSON) => {
				const { data } = resJSON;
				setRequests(data);
			})
			.then(() => {
				setLoading(false);
			})
			.catch((e) => {
				console.log("Something went wrong", e);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<Spinner size={100} loading={loading} />
			) : (
				<div>
					<Sidebar active="request" />
					<MyRequestsContent requests={requests} />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default RequestsPage;
