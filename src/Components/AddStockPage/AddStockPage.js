import React, { useEffect, useState } from "react";
import Spinner from "../../spinner";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
// import { kBaseUrl } from "../../constants";
import AddStockContent from "../AddStockContent/AddStockContent";

const AddStockPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div>
			{loading ? (
				<Spinner size={100} loading={loading} />
			) : (
				<div>
					<Sidebar active="addStock" />
					<AddStockContent/>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default AddStockPage;
