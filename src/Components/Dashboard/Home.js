import React from 'react'

function Home() {
  return (
    <div>

      {/* <!-- loader Start --> */}
      {/* <div id="loading">
        <div id="loading-center">
        </div>
    </div> */}
      {/* <!-- loader END -->
    <!-- Wrapper Start --> */}
      <div className="wrapper">

        <div className="modal fade" id="new-order" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="popup text-left">
                  <h4 className="mb-3">New Order</h4>
                  <div className="content create-workform bg-body">
                    <div className="pb-3">
                      <label className="mb-2">Email</label>
                      <input type="text" className="form-control" placeholder="Enter Name or Email" />
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                        <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                        <div className="btn btn-outline-primary" data-dismiss="modal">Create</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="card card-transparent card-block card-stretch card-height border-none">
                  <div className="card-body p-0 mt-lg-2 mt-0">
                    <h3 className="mb-3">Hi Graham, Good Morning</h3>
                    <p className="mb-0 mr-4">Your dashboard gives you views of key performance or business
                                    process.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4 card-total-sale">
                          <div className="icon iq-icon-box-2 bg-info-light">
                            <img src="../assets/images/product/1.png" className="img-fluid" alt="imagefile" />
                          </div>
                          <div>
                            <p className="mb-2">Total Sales</p>
                            <h4>31.50</h4>
                          </div>
                        </div>
                        <div className="iq-progress-bar mt-2">
                          <span className="bg-info iq-progress progress-1" data-percent="85">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4 card-total-sale">
                          <div className="icon iq-icon-box-2 bg-danger-light">
                            <img src="../assets/images/product/2.png" className="img-fluid" alt="imagefile" />
                          </div>
                          <div>
                            <p className="mb-2">Total Cost</p>
                            <h4>$ 4598</h4>
                          </div>
                        </div>
                        <div className="iq-progress-bar mt-2">
                          <span className="bg-danger iq-progress progress-1" data-percent="70">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4 card-total-sale">
                          <div className="icon iq-icon-box-2 bg-success-light">
                            <img src="../assets/images/product/3.png" className="img-fluid" alt="imagefile" />
                          </div>
                          <div>
                            <p className="mb-2">Product Sold</p>
                            <h4>4589 M</h4>
                          </div>
                        </div>
                        <div className="iq-progress-bar mt-2">
                          <span className="bg-success iq-progress progress-1" data-percent="75">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* <!-- Page end  --> */}
        </div>
      </div>
      {/* <!-- Wrapper End--> */}

      {/* <!-- Backend Bundle JavaScript --> */}
      <script src="../assets/js/backend-bundle.min.js"></script>

      {/* <!-- Table Treeview JavaScript --> */}
      <script src="../assets/js/table-treeview.js"></script>

      {/* <!-- Chart Custom JavaScript --> */}
      <script src="../assets/js/customizer.js"></script>

      {/* <!-- Chart Custom JavaScript --> */}
      <script async src="../assets/js/chart-custom.js"></script>

      {/* <!-- app JavaScript --> */}
      <script src="../assets/js/app.js"></script>
    </div>
  )
}

export default Home
