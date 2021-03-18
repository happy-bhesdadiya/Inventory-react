import React from 'react'

function AddStock() {
  return (
    <div>
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
          <div className="container-fluid add-form-list">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Add Product</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <form action="page-list-product.html" data-toggle="validator">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Product Type *</label>
                            <select className="selectpicker form-control" name="type" data-style="py-0">
                              <option>Standard</option>
                              <option>Combo</option>
                              <option>Digital</option>
                              <option>Service</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name *</label>
                            <input type="text" className="form-control" placeholder="Enter Name" data-errors="Please Enter Name." required />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Code *</label>
                            <input type="text" className="form-control" placeholder="Enter Code" data-errors="Please Enter Code." required />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Barcode Symbology *</label>
                            <select name="type" className="selectpicker form-control" data-style="py-0">
                              <option>CREM01</option>
                              <option>UM01</option>
                              <option>SEM01</option>
                              <option>COF01</option>
                              <option>FUN01</option>
                              <option>DIS01</option>
                              <option>NIS01</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Category *</label>
                            <select name="type" className="selectpicker form-control" data-style="py-0">
                              <option>Beauty</option>
                              <option>Grocery</option>
                              <option>Food</option>
                              <option>Furniture</option>
                              <option>Shoes</option>
                              <option>Frames</option>
                              <option>Jewellery</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Cost *</label>
                            <input type="text" className="form-control" placeholder="Enter Cost" data-errors="Please Enter Cost." required />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Price *</label>
                            <input type="text" className="form-control" placeholder="Enter Price" data-errors="Please Enter Price." required />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Tax Method *</label>
                            <select name="type" className="selectpicker form-control" data-style="py-0">
                              <option>Exclusive</option>
                              <option>Inclusive</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Quantity *</label>
                            <input type="text" className="form-control" placeholder="Enter Quantity" required />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Image</label>
                            <input type="file" className="form-control image-file" name="pic" accept="image/*" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description / Product Details</label>
                            <textarea className="form-control" rows="4"></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Add Product</button>
                      <button type="reset" className="btn btn-danger">Reset</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Page end  --> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddStock;