import React, { useEffect, useState, useContext } from 'react';
import { RequestContext } from './../../Context/RequestContext';
import Spinner from '../../spinner';
import Footer from '../Footer/Footer';
import MyRequestsContent from '../MyRequestsContent/MyRequestsContent';
import Sidebar from '../Sidebar/Sidebar';
import { kBaseUrl } from '../../constants';

const RequestsPage = () => {
  const [loading, setLoading] = useState(true);
  const { userRequest, setUserRequest } = useContext(RequestContext);

  useEffect(() => {
    console.log(userRequest);
    if (userRequest) {
      setLoading(false);
    } else {
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
    }
  }, [userRequest]);

  return (
    <div>
      {loading ? (
        <Spinner size={100} loading={loading} />
      ) : (
        <div>
          <Sidebar active='request' />
          <MyRequestsContent requests={userRequest} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default RequestsPage;
