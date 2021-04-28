import React, { useState, useContext } from 'react';
import { UserContext } from './../../Context/UserContext';
import { RequestContext } from './../../Context/RequestContext';
import Spinner from './../../spinner';
import { kBaseUrl } from './../../constants';
import { useHistory, Link } from 'react-router-dom';
// import { setCookie } from "./../../utils";
import logo from './../../assets/logo.png';

const SignInPage = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [disableLogin, setDisableLogin] = useState(false);
  const { userProfile, setUserProfile } = useContext(UserContext);
  const { userRequest, setUserRequest } = useContext(RequestContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setDisableLogin(true);
    setError(false);
    setLoading(true);

    setEmail(email.trim());
    setPassword(password.trim());

    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      password.length >= 8
    ) {
      fetch(kBaseUrl + '/user/login', {
        body: JSON.stringify({
          email: email,
          password: password,
          is_admin: props.admin,
        }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        method: 'POST',
      })
        .then((res) => {
          if (res.status === 202) {
            return res.json();
          } else {
            setEmail('');
            setPassword('');
            setLoading(false);
            setError(true);
            setDisableLogin(false);
          }
        })
        .then((resJSON) => {
          const { data } = resJSON;
          // const accessToken = "access-token";
          // const token = data.token;
          // setCookie(accessToken, token);
          console.log(data);
          setUserProfile(data);
        })
        .then(() => {
          console.log('userPro', userProfile);
          props.setLogin();
          history.replace('/dashboard');
        })
        .catch((e) => {
          console.log('Something Went Wrong !', e);
        })
        .finally(() => {
          setDisableLogin(false);
          setLoading(false);
        });
    } else {
      console.log('Error in Data');
      setEmail('');
      setPassword('');
      setError(true);
      setLoading(false);
      setDisableLogin(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner size={100} loading={loading} />
      ) : (
        <div className='wrapper'>
          <section className='login-content'>
            <div className='container'>
              <div className='row align-items-center justify-content-center height-self-center'>
                <div className='col-lg-8'>
                  <div className='card auth-card'>
                    <div className='card-body p-0'>
                      <div className='d-flex align-items-center auth-content'>
                        <div className='col-lg-7 align-self-center'>
                          <div className='p-3'>
                            <h2
                              className='mb-2'
                              style={{
                                textAlign: 'center',
                              }}
                            >
                              Sign In
                            </h2>
                            <p
                              style={{
                                textAlign: 'center',
                                color: 'red',
                                fontWeight: 'bold',
                              }}
                            >
                              {error ? 'Invalid Email ID or Password' : ''}
                            </p>
                            <form
                              style={{
                                textAlign: 'center',
                              }}
                              onSubmit={handleLogin}
                            >
                              <div className='row'>
                                <div className='col-lg-12'>
                                  <div className='floating-label form-group'>
                                    <input
                                      className='floating-input form-control'
                                      type='email'
                                      placeholder=' '
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      required
                                    />
                                    <label> Email</label>
                                  </div>
                                </div>
                                <div className='col-lg-12'>
                                  <div className='floating-label form-group'>
                                    <input
                                      className='floating-input form-control'
                                      type='password'
                                      placeholder=' '
                                      value={password}
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                      required
                                    />
                                    <label>Password</label>
                                  </div>
                                </div>
                                <div
                                  className='col-lg-12'
                                  style={{
                                    textAlign: 'right',
                                  }}
                                >
                                  <button
                                    type='button'
                                    style={{
                                      border: 'none',
                                      backgroundColor: 'inherit',
                                      color: '#F68122',
                                    }}
                                    onClick={() =>
                                      history.replace('/user/forgotPassword')
                                    }
                                  >
                                    Forgot Password
                                  </button>
                                </div>
                              </div>
                              <button
                                type='submit'
                                disabled={disableLogin}
                                style={{
                                  borderColor: '#F68122',
                                  borderStyle: 'solid',
                                  backgroundColor: '#F68122',
                                }}
                                className='btn btn-primary mt-3'
                              >
                                Sign In
                              </button>
                              {!props.admin && (
                                <p className='mt-3'>
                                  Don't have an Account ? &nbsp;&nbsp;&nbsp;
                                  <button
                                    type='button'
                                    style={{
                                      border: 'none',
                                      backgroundColor: 'inherit',
                                      color: '#F68122',
                                    }}
                                    onClick={() => {
                                      history.replace('/user/signup');
                                    }}
                                  >
                                    Sign Up
                                  </button>
                                </p>
                              )}
                            </form>
                          </div>
                        </div>
                        <div className='col-lg-5 content-right'>
                          <img
                            style={{
                              borderRadius: '50%',
                            }}
                            // src="./images/logo.png"
                            src={logo}
                            className='img-fluid image-right'
                            alt='Bacancy Inventory Portal'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
