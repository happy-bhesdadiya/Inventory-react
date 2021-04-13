import React, { useEffect } from "react";

const TermsOfServiceContent = () => {
	return (
		<div className="content-page">
			<div id="faqAccordion" className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="iq-accordion career-style faq-style">
							<div className="card iq-accordion-block">
								<div
									className="active-faq clearfix"
									id="headingOne"
								>
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<a
													role="contentinfo"
													className="accordion-title"
													data-toggle="collapse"
													data-target="#collapseOne"
													aria-expanded="true"
													aria-controls="collapseOne"
												>
													<span>
														Lorem
														ipsum
														dolor sit{" "}
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-details collapse show"
									id="collapseOne"
									aria-labelledby="headingOne"
									data-parent="#faqAccordion"
								>
									<p className="mb-0">
										Anim pariatur cliche
										reprehenderit, enim eiusmod
										high life accusamus terry
										richardson ad squid. 3 wolf
										moon officia aute, non
										cupidatat skateboard dolor
										brunch. Food truck quinoa
										nesciunt laborum eiusmod.
										Brunch 3 wolf moon tempor,
										sunt aliqua put a bird on it
										squid single-origin coffee
										nulla assumenda shoreditch et.
										Nihil anim keffiyeh helvetica,
										craft beer labore wes anderson
										cred nesciunt sapiente ea
										proident. Ad vegan excepteur
										butcher vice lomo. Leggings
										occaecat craft beer
										farm-to-table, raw denim
										aesthetic synth nesciunt you
										probably haven't heard of them
										accusamus labore sustainable
										VHS.{" "}
									</p>
								</div>
							</div>
							<div className="card iq-accordion-block">
								<div
									className="active-faq clearfix"
									id="headingTwo"
								>
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<a
													role="contentinfo"
													className="accordion-title collapsed"
													data-toggle="collapse"
													data-target="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo"
												>
													<span>
														{" "}
														consectetur
														adipiscing
														elit
													</span>{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-details collapse"
									id="collapseTwo"
									aria-labelledby="headingTwo"
									data-parent="#faqAccordion"
								>
									<p className="mb-0">
										Anim pariatur cliche
										reprehenderit, enim eiusmod
										high life accusamus terry
										richardson ad squid. 3 wolf
										moon officia aute, non
										cupidatat skateboard dolor
										brunch. Food truck quinoa
										nesciunt laborum eiusmod.
										Brunch 3 wolf moon tempor,
										sunt aliqua put a bird on it
										squid single-origin coffee
										nulla assumenda shoreditch et.
										Nihil anim keffiyeh helvetica,
										craft beer labore wes anderson
										cred nesciunt sapiente ea
										proident. Ad vegan excepteur
										butcher vice lomo. Leggings
										occaecat craft beer
										farm-to-table, raw denim
										aesthetic synth nesciunt you
										probably haven't heard of them
										accusamus labore sustainable
										VHS.
									</p>
								</div>
							</div>
							<div className="card iq-accordion-block ">
								<div
									className="active-faq clearfix"
									id="headingThree"
								>
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<a
													role="contentinfo"
													className="accordion-title collapsed"
													data-toggle="collapse"
													data-target="#collapseThree"
													aria-expanded="false"
													aria-controls="collapseThree"
												>
													<span>
														Etiam sit
														amet justo
														non{" "}
													</span>{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-details collapse"
									id="collapseThree"
									aria-labelledby="headingThree"
									data-parent="#faqAccordion"
								>
									<p className="mb-0">
										Anim pariatur cliche
										reprehenderit, enim eiusmod
										high life accusamus terry
										richardson ad squid. 3 wolf
										moon officia aute, non
										cupidatat skateboard dolor
										brunch. Food truck quinoa
										nesciunt laborum eiusmod.
										Brunch 3 wolf moon tempor,
										sunt aliqua put a bird on it
										squid single-origin coffee
										nulla assumenda shoreditch et.
										Nihil anim keffiyeh helvetica,
										craft beer labore wes anderson
										cred nesciunt sapiente ea
										proident. Ad vegan excepteur
										butcher vice lomo. Leggings
										occaecat craft beer
										farm-to-table, raw denim
										aesthetic synth nesciunt you
										probably haven't heard of them
										accusamus labore sustainable
										VHS.
									</p>
								</div>
							</div>
							<div className="card iq-accordion-block ">
								<div
									className="active-faq clearfix"
									id="headingFour"
								>
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<a
													role="contentinfo"
													className="accordion-title collapsed"
													data-toggle="collapse"
													data-target="#collapseFour"
													aria-expanded="false"
													aria-controls="collapseFour"
												>
													<span>
														{" "}
														velit
														accumsan
														laoreet{" "}
													</span>{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-details collapse"
									id="collapseFour"
									aria-labelledby="headingFour"
									data-parent="#faqAccordion"
								>
									<p className="mb-0">
										Anim pariatur cliche
										reprehenderit, enim eiusmod
										high life accusamus terry
										richardson ad squid. 3 wolf
										moon officia aute, non
										cupidatat skateboard dolor
										brunch. Food truck quinoa
										nesciunt laborum eiusmod.
										Brunch 3 wolf moon tempor,
										sunt aliqua put a bird on it
										squid single-origin coffee
										nulla assumenda shoreditch et.
										Nihil anim keffiyeh helvetica,
										craft beer labore wes anderson
										cred nesciunt sapiente ea
										proident. Ad vegan excepteur
										butcher vice lomo. Leggings
										occaecat craft beer
										farm-to-table, raw denim
										aesthetic synth nesciunt you
										probably haven't heard of them
										accusamus labore sustainable
										VHS.
									</p>
								</div>
							</div>
							<div className="card iq-accordion-block">
								<div
									className="active-faq clearfix"
									id="headingFive"
								>
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<a
													role="contentinfo"
													className="accordion-title collapsed"
													data-toggle="collapse"
													data-target="#collapseFive"
													aria-expanded="false"
													aria-controls="collapseFive"
												>
													<span>
														{" "}
														Donec
														volutpat
														metus in
														erat{" "}
													</span>{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-details collapse"
									id="collapseFive"
									aria-labelledby="headingFive"
									data-parent="#faqAccordion"
								>
									<p className="mb-0">
										Anim pariatur cliche
										reprehenderit, enim eiusmod
										high life accusamus terry
										richardson ad squid. 3 wolf
										moon officia aute, non
										cupidatat skateboard dolor
										brunch. Food truck quinoa
										nesciunt laborum eiusmod.
										Brunch 3 wolf moon tempor,
										sunt aliqua put a bird on it
										squid single-origin coffee
										nulla assumenda shoreditch et.
										Nihil anim keffiyeh helvetica,
										craft beer labore wes anderson
										cred nesciunt sapiente ea
										proident. Ad vegan excepteur
										butcher vice lomo. Leggings
										occaecat craft beer
										farm-to-table, raw denim
										aesthetic synth nesciunt you
										probably haven't heard of them
										accusamus labore sustainable
										VHS.
									</p>
								</div>
							</div>
							<div className="card iq-accordion-block">
								<div
									className="active-faq clearfix"
									id="headingSix"
								>
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<a
													role="contentinfo"
													className="accordion-title collapsed"
													data-toggle="collapse"
													data-target="#collapseSix"
													aria-expanded="false"
													aria-controls="collapseSix"
												>
													<span>
														{" "}
														quam quis
														massa
														tristique{" "}
													</span>{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-details collapse"
									id="collapseSix"
									aria-labelledby="headingSix"
									data-parent="#faqAccordion"
								>
									<p className="mb-0">
										Anim pariatur cliche
										reprehenderit, enim eiusmod
										high life accusamus terry
										richardson ad squid. 3 wolf
										moon officia aute, non
										cupidatat skateboard dolor
										brunch. Food truck quinoa
										nesciunt laborum eiusmod.
										Brunch 3 wolf moon tempor,
										sunt aliqua put a bird on it
										squid single-origin coffee
										nulla assumenda shoreditch et.
										Nihil anim keffiyeh helvetica,
										craft beer labore wes anderson
										cred nesciunt sapiente ea
										proident. Ad vegan excepteur
										butcher vice lomo. Leggings
										occaecat craft beer
										farm-to-table, raw denim
										aesthetic synth nesciunt you
										probably haven't heard of them
										accusamus labore sustainable
										VHS.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TermsOfServiceContent;
