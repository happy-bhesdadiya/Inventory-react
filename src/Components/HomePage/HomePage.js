import React, { useState } from "react";
import { kBaseUrl } from "../../constants";
import { getCookie } from "../../utils";

const HomePage = () => {
  const accessToken = getCookie("access-token");
  const [user, setUser] = useState({});
  const [name, setName] = useState("");

  const handleHome = (e) => {
    e.preventDefault();
    fetch(kBaseUrl + "/user/viewProfile", {
      credentials: "include",
      method: "GET"
    }).then(async (res) => {
      if (res.status === 200) {
        const resJSON = await res.json();
        const { data } = resJSON;
        setUser(data);
        setName(data.user_name);
        console.log(data);
      }
    });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleHome}> Get Data </button>
      {/* <p>
        {Object.entries(user).forEach(([key, value]) => {
          console.log(`${key} ${value}`);
        })}
      </p> */}
      {name}
    </div>
  );
};

export default HomePage;
