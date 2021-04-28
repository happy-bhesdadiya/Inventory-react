import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { UserContext } from './Context/UserContext';
import SignInPage from './Components/SignInPage/SignInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import HomePage from './Components/HomePage/HomePage';
import { kBaseUrl } from './constants';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService/TermsOfService';
import Header from './Components/Header/Header';
import Spinner from './spinner';
import AdminPage from './Components/AdminPage/AdminPage';
import RequestsPage from './Components/RequestsPage/RequestsPage';
import ListAdmin from './Components/ListAdmin/ListAdmin';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { userProfile, setUserProfile } = useContext(UserContext);

  useEffect(() => {
    fetch(kBaseUrl + '/authenticate', {
      credentials: 'include',
      method: 'GET',
    })
      .then((res) => {
        if (res.status == 200) {
          fetch(kBaseUrl + '/user/viewProfile', {
            credentials: 'include',
            method: 'GET',
          })
            .then((res) => {
              return res.json();
            })
            .then((resJSON) => {
              const { data } = resJSON;
              setUserProfile(data);
            })
            .then(() => {
              setLogin();
              setLoading(false);
            });
        } else {
          console.log('looks like unauthentication');
          setLoading(false);
          setLogout();
        }
      })
      .catch((e) => {
        console.log('Something went wrong', e);
        setLoading(false);
      });
  }, []);

  const setLogin = () => {
    setLoggedIn(true);
    console.log('User Logged In !');
  };
  const setLogout = () => {
    setLoggedIn(false);
    console.log('User Logged Out !');
  };

  const isAuthenticated = () => {
    return loggedIn ? (
      <Redirect to='/dashboard' />
    ) : (
      <SignInPage setLogin={setLogin} admin={false} />
    );
  };

  const checkSignIn = () => {
    return loggedIn ? (
      <Redirect to='/dashboard' />
    ) : (
      <SignInPage setLogin={setLogin} admin={false} />
    );
  };

  const checkSignUp = () => {
    return loggedIn ? (
      <Redirect to='/dashboard' />
    ) : (
      <SignUpPage setLogin={setLogin} admin={false} />
    );
  };

  const checkForgotPassword = () => {
    return loggedIn ? <Redirect to='/dashboard' /> : <ForgotPassword />;
  };

  const toHome = () => {
    return loggedIn ? <HomePage /> : <Redirect to='/user/signin' />;
  };
  const toAdminHome = () => {
    return loggedIn ? <HomePage /> : <Redirect to='/admin/signin' />;
  };

  const toMyRequests = () => {
    return loggedIn ? <RequestsPage /> : <Redirect to='/user/signin' />;
  };

  const toPrivacyPolicy = () => {
    return loggedIn ? <PrivacyPolicy /> : <Redirect to='/user/signin' />;
  };
  const toTermsOfService = () => {
    return loggedIn ? <TermsOfService /> : <Redirect to='/user/signin' />;
  };

  const checkAdminSignIn = () => {
    return loggedIn ? (
      <Redirect to='/dashboard' />
    ) : (
      <SignInPage setLogin={setLogin} admin={true} />
    );
  };
  const toaddAdmin = () => {
    console.log('reached here');
    return loggedIn ? <AdminPage /> : <Redirect to='/admin/signin' />;
  };
  const togetUsers = () => {
    console.log('Inside Get Users');
    return loggedIn ? <ListAdmin /> : <Redirect to='/admin/signin' />;
  };

  return (
    <Router>
      {loading ? (
        <Spinner size={100} loading={loading} />
      ) : (
        <>
          {loggedIn && <Header setLogout={setLogout} />}
          <Switch>
            {/* ROUTES FOR EMPLOYEES */}
            <Route exact path='/user/signin' render={() => checkSignIn()} />
            <Route exact path='/user/signup' render={() => checkSignUp()} />
            <Route
              exact
              path='/user/forgotPassword'
              render={() => checkForgotPassword()}
            />

            <Route exact path='/viewRequests' render={() => toMyRequests()} />

            {/* ROUTES FOR ADMINS */}
            <Route
              exact
              path='/admin/signin'
              render={() => checkAdminSignIn()}
            />
            <Route exact path='/admin/dashboard' render={() => toAdminHome()} />

            {/* DEFAULT ROUTES */}
            <Route exact path='/dashboard' render={() => toHome()} />

            <Route exact path='/admin/addAdmin' render={() => toaddAdmin()} />

            <Route exact path='/admin/getUsers' render={() => togetUsers()} />

            <Route
              exact
              path='/privacyPolicy'
              render={() => toPrivacyPolicy()}
            />
            <Route
              exact
              path='/termsOfService'
              render={() => toTermsOfService()}
            />
            <Route path='/' render={() => isAuthenticated()} />
            {/* <Route exact path="/" render={() => toHome()} /> */}
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
