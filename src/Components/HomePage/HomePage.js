import React, { useEffect, useState } from "react";
import Footer from "./../Footer/Footer";
import Sidebar from "./../Sidebar/Sidebar";
import HomeContent from "../HomeContent/HomeContent";
import Spinner from "../../spinner";
import { kBaseUrl } from "./../../constants";

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(kBaseUrl + "/user/getAllStock", {
			credentials: "include",
			method: "GET",
		})
			.then((res) => {
				return res.json();
			})
			.then((resJSON) => {
				const { data } = resJSON;
				setProducts(data);
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
					<Sidebar active="home" />
					<HomeContent products={products} />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default HomePage;
