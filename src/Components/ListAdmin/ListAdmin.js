
import React, { useContext, useEffect, useState } from "react";

import { beautifyDate } from "../../utils";
import { kBaseUrl } from "./../../constants";
import Sidebar from "./../Sidebar/Sidebar";
import Spinner from "../../spinner";
import { UserContext } from "../../Context/UserContext";
const ListAdmin = ({ admins }) => {
    const [Admin, setAdmin] = useState([]);
	const [loading, setLoading] = useState(true);    
	const { userProfile } = useContext(UserContext);
	
        useEffect(() => {
            fetch(kBaseUrl + "/admin/getAdmin", {
                credentials: "include",
                method: "GET",
            })
                .then((res) => {
                    return res.json();
                })
                .then((resJSON) => {
                    console.log("This is admin data",resJSON);
                    const { data } = resJSON;
                    setAdmin(data);
					
                })
                .then(() => {
					setLoading(false);
					$(document).ready(function () {
						$("#Admin").DataTable();
					});
                })
                .catch((e) => {
                    console.log("Something went wrong", e);
                });
        }, []);
		
	var count = 0;

	const handleRenew = (id) => {
		console.log("Renew Id: ", id);
	};
	const handleDelete = (id) => {
		console.log("Deletion Id : ", id);
	};

	return (
        <div>
		
          <Sidebar active="home"/>
		  {loading ? (
				<Spinner size={100} loading={loading} />
			) : (
		<div className="content-page">
			<div className="container-fluid">
				<div className="row">
					{/* <div className="col-lg-12"> */}
					{/* <div className="d-flex flex-wrap align-items-center justify-content-between mb-4"> */}
					{/* <div className="align-items-center mb-4">
							<div style={{ textAlign: "center" }}>
								<h4 className="mb-3">Request List</h4>
							</div>
						</div> */}
					{/* </div> */}
					 <div
						className="col-lg-12"
						style={{ textAlign: "center" }}
					>
						<div className="table-responsive rounded mb-3">
							{Admin.length > 0 ? (
								<table
									id="Admin"
									className="data-table table mb-0 tbl-server-info"
									style={{ textAlign: "center" }}
								>
									<thead className="bg-white text-uppercase">
										<tr className="ligth ligth-data">
											<th>
												<div className="checkbox d-inline-block">
													<label
														htmlFor="checkbox1"
														className="mb-0"
													>
														No.
													</label>
												</div>
											</th>
											<th>UserName</th>
											<th>Email</th>
											<th>Mobile Number</th>
											<th>Profile Image</th>
                                            
                                            <th>Entry Date</th>											
										</tr>
									</thead>
									<tbody className="ligth-body">
										{Admin.map((request) => (
											<tr>
												<td>
													<div className="checkbox d-inline-block">
														<label
															htmlFor="checkbox2"
															className="mb-0"
														>
															{
																++count
															}
														</label>
													</div>
												</td>
												<td>
													{
														request.user_name
													}
												</td>
												
												<td>
													{request.email}
												</td>
												<td>
													
													{request.mobile_number}
													
												</td>
												
												<td>
                                                <img  className="rounded img-fluid avatar-60" src={request.profile_image} width="80" height="80"/>
												</td>
                                                
                                                <td>
                                               
                                                {beautifyDate(
														request.createdAt
													)}
                                                </td>
											</tr>
										))}
									</tbody>
								</table>
							) : (
								<h3 className="ml-3">
									You have not made any Request for
									the Inventories !
								</h3>
							)}
						</div>
					</div>
				</div>
			</div> 
		</div> 
		)}
        </div>
	);
};

export default ListAdmin;
