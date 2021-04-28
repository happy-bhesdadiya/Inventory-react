import React, { useState } from 'react';
import { RequestContext } from './RequestContext';

const RequestContextProvider = ({ children }) => {
  const [userRequest, setUserRequest] = useState(null);

  return (
    <RequestContext.Provider value={{ userRequest, setUserRequest }}>
      {children}
    </RequestContext.Provider>
  );
};

export default RequestContextProvider;
