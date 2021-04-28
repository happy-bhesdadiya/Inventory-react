import React, { useState, useContext, useEffect } from 'react';
import { kBaseUrl } from './../../constants';
import { RequestContext } from './../../Context/RequestContext';

const StockCard = ({ prod }) => {
  const { userRequest, setUserRequest } = useContext(RequestContext);
  const [isRequested, setIsRequested] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  useEffect(() => {
    console.log(prod);
    if (prod.available_qty === 0) {
      setIsAvailable(false);
    }
    userRequest.map((el) => {
      if (el.product_name === prod.product_name && el.status != 'Rejected') {
        setIsRequested(true);
      }
    });
  }, [userRequest]);
  const handleRequest = () => {
    console.log('Button Clicked ', prod.id);
    var stock_id = prod.id;
    console.log(stock_id);
    fetch(kBaseUrl + '/user/aquireProduct', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock_id: prod.id }),
    }).then(() => {
      fetch(kBaseUrl + '/user/getMyRequests', {
        credentials: 'include',
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then((resJSON) => {
          const { data } = resJSON;
          console.log('data', data);
          setUserRequest(data);
        })
        .then(() => {
          console.log('userReqs', userRequest);
          setIsRequested(true);
        });
    });
  };

  return (
    <div className='card card-block card-stretch card-height mb-0'>
      <div
        className='card-body'
        style={{
          textAlign: 'center',
        }}
      >
        <div className='rounded'>
          <img
            src={prod.product_image}
            className='style-img img-fluid m-auto p-3'
            style={{ height: '175px', width: 'auto' }}
            alt={prod.product_name}
          />
        </div>
        <div className='style-text'>
          <h5>{prod.product_name}</h5>
          <p className='mb-0'>Available: {prod.available_qty}</p>

          <button
            disabled={!isAvailable || isRequested ? true : false}
            onClick={handleRequest}
            id={prod.id}
            className='btn rounded-pill mt-2'
            style={
              !isAvailable || isRequested
                ? {
                    backgroundColor: 'black',
                    opacity: 90,
                    color: 'white',
                  }
                : {
                    backgroundColor: '#F68122',
                    color: 'white',
                  }
            }
          >
            {!isAvailable
              ? 'Out of Stock'
              : isRequested
              ? 'Requested'
              : 'Request'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
