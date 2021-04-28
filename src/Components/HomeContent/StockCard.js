import React, { useState } from "react";

const StockCard = ({ prod }) => {
	const handleRequest = (idValue) => {
		console.log("Button Clicked ", idValue);
	};

	return (
		<div className="card card-block card-stretch card-height mb-0">
			<div
				className="card-body"
				style={{
					textAlign: "center",
				}}
			>
				<div className="rounded">
					<img
						src={prod.product_image}
						className="style-img img-fluid m-auto p-3"
						style={{ height: "175px", width: "auto" }}
						alt={prod.product_name}
					/>
				</div>
				<div className="style-text">
					<h5>{prod.product_name}</h5>
					<p className="mb-0">Available: {prod.available_qty}</p>
					<form onSubmit={handleRequest(prod.id)}>
						<button
							type="submit"
							disabled={
								prod.available_qty === 0 ? true : false
							}
							id={prod.id}
							className="btn rounded-pill mt-2"
							style={
								prod.available_qty === 0
									? {
											backgroundColor: "black",
											opacity: 90,
											color: "white",
									  }
									: {
											backgroundColor:
												"#F68122",
											color: "white",
									  }
							}
						>
							{prod.available_qty === 0
								? "Out of Stock"
								: "Request"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default StockCard;
