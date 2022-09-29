import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import localStorageActions from '../../utils/localStorage';

const URL = 'https://stark-badlands-38572.herokuapp.com/users/sign_in';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      user: {
        email,
        password,
      },
    };

    Axios
      .post(URL, userObj)
      .then((response) => {
        const data = response.data.user;
        localStorageActions.setUser(data);
        navigate('/hotels');
        console.log('Success Login: ', data);
      })
      .catch((error) => {
        console.log('Error Login: ', error.response.data);
      });
  };

  return (
    <>
      <section className="section-form">
        <h2 className="form-title">Login Into Your Account</h2>

        <div className="form-container">
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  Email
                  <br />
                  <input type="text" name="email" id="signup-email" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password
                  <br />
                  <input type="password" name="password" id="signup-password" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
                </label>
              </div>

              <div className="signup-buttons">
                <button type="submit" className="login-btn" to="/">Login</button>
              </div>
            </form>

            <div className="notice-account">
              <p>
                Dont have an account?
                {' '}
                <span><Link className="login-link" to="/register" id="login-on-signup">Register</Link></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
