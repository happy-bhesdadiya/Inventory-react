import React, { useEffect } from "react";
import Sidebar from "./../Sidebar/Sidebar";
import Footer from "./../Footer/Footer";
import PrivacyPolicyContent from "./../PrivacyPolicyContent/PrivacyPolicyContent";

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Sidebar />
			<PrivacyPolicyContent />
			<Footer />
		</div>
	);
};

export default PrivacyPolicy;
