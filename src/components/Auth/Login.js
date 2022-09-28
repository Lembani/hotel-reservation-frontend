import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import localStorageActions from '../../utils/localStorage';

const URL = 'http://localhost:3000/users/sign_in';

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
      <h2>Login page</h2>

      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <p className="ms-4 mb-1">Email</p>
            <input type="text" name="email" id="signup-email" className="form-control rounded-pill" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <p className="ms-4 mb-1">Password</p>
            <input type="password" name="password" id="signup-password" className="form-control rounded-pill" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="signup-buttons mt-5 text-center">
            <button type="submit" className="style-btn rounded-pill" to="/">Login</button>
          </div>
        </form>

        <div className="notice-account mt-4">
          <p>
            Dont have an account?
            {' '}
            <span className="login-link"><Link to="/register" id="login-on-signup">Register</Link></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
