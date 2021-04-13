const setCookie = (name, value) => {
	let d = new Date();
	let maxAge = "max-age=" + (d.getSeconds() + 7 * 60 * 60 * 24);
	document.cookie = name + "=" + value + ";" + maxAge;
};

const setLogoutCookie = (name, value) => {
	let d = new Date();
	let maxAge = "max-age= -10";
	document.cookie = name + "=" + value + ";" + maxAge;
};

const getCookie = function (name) {
	const cookies = decodeURIComponent(document.cookie);
	let cname = name + "=";
	let ca = cookies.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substr(1);
		}
		if (c.indexOf(cname) === 0) {
			return c.substr(cname.length);
		}
	}
	return null;
};

const beautifyDate = (date) => {
	const tokens = date.split("-");
	const year = tokens[0];
	const monthNum = tokens[1];
	let month = "bc";
	const day = tokens[2].slice(0, 2);

	switch (monthNum) {
		case "01":
			month = "January";
			break;
		case "02":
			month = "February";
			break;
		case "03":
			month = "March";
			break;
		case "04":
			month = "April";
			break;
		case "05":
			month = "May";
			break;
		case "06":
			month = "June";
			break;
		case "07":
			month = "July";
			break;
		case "08":
			month = "August";
			break;
		case "09":
			month = "September";
			break;
		case "10":
			month = "October";
			break;
		case "11":
			month = "November";
			break;
		case "12":
			month = "December";
			break;
	}

	return `${day} ${month}, ${year}`;
};

module.exports = { setCookie, getCookie, setLogoutCookie, beautifyDate };
