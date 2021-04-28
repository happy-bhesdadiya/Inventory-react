import React, { useEffect, useState, useContext } from 'react';
import { RequestContext } from './../../Context/RequestContext';
import Footer from './../Footer/Footer';
import Sidebar from './../Sidebar/Sidebar';
import HomeContent from '../HomeContent/HomeContent';
import Spinner from '../../spinner';
import { kBaseUrl } from './../../constants';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { userRequest, setUserRequest } = useContext(RequestContext);

  useEffect(() => {
    fetch(kBaseUrl + '/user/getAllStock', {
      credentials: 'include',
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        const { data } = resJSON;
        setProducts(data);
        console.log(userRequest);
      })
      .then(() => {
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
            setLoading(false);
          });
      })
      .catch((e) => {
        console.log('Something went wrong', e);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner size={100} loading={loading} />
      ) : (
        <div>
          <Sidebar active='home' />
          <HomeContent products={products} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomePage;
