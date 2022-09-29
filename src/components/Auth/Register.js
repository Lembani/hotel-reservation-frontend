import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import localStorageActions from '../../utils/localStorage';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      user: {
        name,
        email,
        password,
        passwordConfirmation,
      },
    };

    Axios
      .post('https://stark-badlands-38572.herokuapp.com/users', userObj)
      .then((res) => {
        const data = res.data.user;
        localStorageActions.setUser(data);
        navigate('/hotels');
        console.log('Success Register: ', data);
      })
      .catch((error) => {
        console.log('Failed Register: ', error);
      });
  };

  return (
    <section className="section-form">
      <h2 className="form-title">Register For An Account</h2>

      <div className="form-container">
        <div className="register-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Name
                <br />
                <input type="text" name="name" id="register-name" className="form-control" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
                <br />
                <input type="text" name="email" id="register-email" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
                <br />
                <input type="password" name="password" id="register-password" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="password_confirmation">
                Confirm Password
                <br />
                <input type="password" name="password_confirmation" id="confirm_register_password" className="form-control" placeholder="Confirm password" required onChange={(e) => setPasswordConfirmation(e.target.value)} />
              </label>
            </div>

            <div className="register-buttons">
              <button type="submit" className="register-btn" to="/signin">Register</button>
            </div>
          </form>
          <div className="notice-account">
            <p>
              Already have an account?
              {' '}
              <span><Link className="login-link" id="register-on-login" to="/login">Login</Link></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
