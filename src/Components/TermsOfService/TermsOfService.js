import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import TermsOfServiceContent from "../TermsOfServiceContent/TermsOfServiceContent";

const TermsOfService = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Sidebar />
			<TermsOfServiceContent />
			<Footer />
		</div>
	);
};

export default TermsOfService;
