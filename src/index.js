import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RequestContextProvider from './Context/RequestContextProvider';
import UserContextProvider from './Context/UserContextProvider';

ReactDOM.render(
  <UserContextProvider>
    <RequestContextProvider>
      <App />
    </RequestContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);
