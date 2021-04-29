import React, { useState } from "react";
import { kBaseUrl } from "../../constants";
import Spinner from "./../../spinner";

const AddStockContent = () => {

  const [product_name, setProductName] = useState('');
  const [total_qty, setTotalQty] = useState('');
  const [product_price, setProductPrice] = useState('');
  const [product_img, setProductImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgArr, setImgArr] = useState('');
  const stockImg = document.getElementById('stockImg');

  const fileToBase64 = () => {
    let imgArr = [];
    let reader = new FileReader;
    reader.readAsDataURL(stockImg.files[0])

    reader.onload = function(event){
      const result = event.target.result; //event.target.results contains the base64 code to create the image.
     
      imgArr.push(result);
      // console.log('after',imgArr[0]);
      setImgArr(imgArr[0]);
    };
    // console.log('before',imgArr[0]);
  }

  const handleAddStock = (e) => {
    e.preventDefault();
    setLoading(true);
    setProductName(product_name.trim());
    setTotalQty(total_qty.trim());
    setProductPrice(product_price.trim());


    


    // let imgArr = [];
    // let reader = new FileReader;
    // reader.readAsDataURL(product_img)

    // reader.onload = function(event){
    //   const result = event.target.result; //event.target.results contains the base64 code to create the image.
    //   // let result = {
    //   //   base64: reader.result
    //   // }
    //   imgArr.push(result);
    //   console.log(imgArr[0]);
    // };
    // console.log(imgArr);

      if (product_name.length > 0 && total_qty.length > 0 && product_price.length > 0) {
        fetch(kBaseUrl + "/admin/addStock", {
          body: JSON.stringify({
            product_name: product_name,
            total_qty: total_qty,
            product_image: imgArr,
            price_per_product: product_price,
          }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          method: "POST",
        })
        .then((res) => {
          if (res.status === 201) {
            setProductName("");
            setTotalQty("");
            setProductPrice("");
            return res.json();
          } else {
            // setError(true);
            // setDisableLogin(false);
          }
        })
        .catch((e) => console.log('Something went wrong!', e))
        .finally(() => setLoading(false))
      } else {
        console.log('Error in Adding Stock');
        setProductName("");
        setTotalQty("");
        setProductPrice("");
      }

  }
  return (
  <>
  {loading ? ( <Spinner size={100} loading={loading} /> ) : 
  (
    <div className="wrapper">
      <div className="content-page">
        <div className="container-fluid add-form-list">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Add Stock</h4>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={handleAddStock} data-toggle="validator">
                    <div className="row">

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Product Name *</label>
                          <input type="text" className="form-control" 
                            value={product_name} onChange={(e) => setProductName(e.target.value)}
                            placeholder="Enter Name" data-errors="Please Enter Product Name." required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Total Quantity *</label>
                          <input type="text" className="form-control"
                          value={total_qty} onChange={(e) => setTotalQty(e.target.value)}
                          placeholder="Enter Total Quantity" data-errors="Please Enter Total Quantity." required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Price (Per Item) *</label>
                          <input type="text" className="form-control" 
                          value={product_price} onChange={(e) => setProductPrice(e.target.value)}
                          placeholder="Enter Price (Per Item)" data-errors="Please Enter Price (Per Item)." required />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Image *</label><br/>
                          <input type="file"
                          onChange={() => setProductImg(fileToBase64)
                        }
                          className="form-control image-file" name="stockImg" id='stockImg' accept="image/*" />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Add Stock</button>
                    <button type="reset" className="btn btn-danger">Reset</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  </>
  );
};

export default AddStockContent;
