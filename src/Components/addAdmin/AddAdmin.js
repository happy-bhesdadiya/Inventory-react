import React, { useEffect, useState } from "react";
import Footer from "./../Footer/Footer";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import HomeContent from "../HomeContent/HomeContent";
import { kBaseUrl } from "./../../constants";
const AddAdmin = () => {
	const year = new Date().getFullYear();
   let history=useHistory();
   const [Username, setUsername] = useState("");
   const [Email, setEmail] = useState("");
   const [Password, setPassword] = useState("");
   const [Mobile_number, setMobile_number] = useState("");
   const [Branch_id, setBranch_id] = useState("");
   const [Profile_pic, setProfile_pic] = useState("");
   const handlReset=(e)=>{
      e.preventDefault();
      setUsername("")
      setEmail("")
      setPassword("")
      setMobile_number("")
      setBranch_id("")
      setProfile_pic("")
   }
   const handleSignUp = (e) => {
      e.preventDefault();
      setUsername(Username.trim())
      setEmail(Email.trim())
      setPassword(Password.trim())
      setMobile_number(Mobile_number.trim())
      setBranch_id(Branch_id.trim())
      setProfile_pic("")
      if (
			Username.length > 7 &&
			Email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
      )
      {
         fetch(kBaseUrl + "/admin/addAdmin", {
				body: JSON.stringify({
					name: Username,
					email: Email,
					mobile_number: Mobile_number,
					branch_id: Branch_id,
					password: Password,
					profile_pic:Profile_pic,
				}),
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				method: "POST",
			}).then((res) => {
            if (res.status === 201) {
               return res.json();
            } else {
               setUsername("")
               setEmail("")
               setPassword("")
               setMobile_number("")
               setBranch_id("")
               setProfile_pic("")
            }
         }).then(() => {
            history.replace("/AdminPage");
         })
      }
      else{
         console.log("Error in User Data");
         setUsername("")
               setEmail("")
               setPassword("")
               setMobile_number("")
               setBranch_id("")
               setProfile_pic("")
      }
   }

	return (
		
     
     <div className="content-page">
     <div className="container-fluid add-form-list">
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Add Admin</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <form action="page-list-product.html" data-toggle="validator"  onSubmit={
																handleSignUp
															}>
                            <div className="row">
                                <div className="col-md-12">
                                    
                                </div>  
                                <div className="col-md-6">                      
                                    <div className="form-group">
                                        <label> User Name *</label>
                                        <input type="text" className="form-control" placeholder="Enter UserName" data-errors="Please Enter Name." required  value={
																			Username
																			}
                                                         onChange={(
																				e
																			) =>
																				setUsername(
																					e
																						.target
																						.value
																				)
																			}
                                                         />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>    
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input
																			className="floating-input form-control"
																			type="email"
																			value={
																				Email
																			}
																			placeholder="Email Address"
																			onChange={(
																				e
																			) =>
																				setEmail(
																					e
																						.target
																						.value
																				)
																			}/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div> 
                                
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password *</label>
                                        <input
																			className="floating-input form-control"
																			type="password"
																			value={
																				Password
																			}
																			placeholder="Enter Password "
																			onChange={(
																				e
																			) =>
																				setPassword(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Mobile Number *</label>
                                        <input
																			className="floating-input form-control"
																			type="text"
																			pattern="[7-9]{1}[0-9]{9}"
																			maxLength="10"
																			value={
																				Mobile_number
																			}
																			placeholder="Enter Mobile Number "
																			onChange={(
																				e
																			) =>
																				setMobile_number(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                
                                
                                <div className="col-md-12">                                    
                                    <div className="form-group">
                                        <label>Branch *</label>
                                        <select
																			id="branchList"
																			name="type"
																			className="form-control"
																			// className="selectpicker form-control"
																			data-style="py-0"
																			value={
																				Branch_id
																			}
																			onChange={(
																				e
																			) =>
																				setBranch_id(
																					e
																						.target
																						.value
																				)
																			}
																			required
																		>
																			<option value="">
																				{" "}
																				Branch{" "}
																			</option>
																			<option value="1">
																				8th
																				Floor,
																				Thaltej
																			</option>
																			<option value="2">
																				12th
																				Floor,
																				Thaltej
																			</option>
																			<option value="3">
																				Gift
																				City,
																				Gandhinagar
																			</option>
																		</select>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                
                            </div>                            
                            <button type="submit" className="btn btn-primary mr-2">Add Admin</button>
                            <button type="reset" className="btn btn-danger" onClick={handlReset}>Reset</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>     
	);
   }

export default AddAdmin;
