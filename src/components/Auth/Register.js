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
      .post('http://localhost:3000/users', userObj)
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
    <div className="container d-md-flex">
      <section className="section-form d-flex flex-column align-items-center mt-4 mt-md-5 pt-md-3">
        <div className="form-title">
          <p className="h3">Register For an Account</p>
        </div>

        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="ms-4 mb-1">Name</p>
              <input type="text" name="name" id="register-name" className="form-control rounded-pill" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <p className="ms-4 mb-1">Email</p>
              <input type="text" name="email" id="register-email" className="form-control rounded-pill" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <p className="ms-4 mb-1">Password</p>
              <input type="password" name="password" id="register-password" className="form-control rounded-pill" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
              <p className="ms-4 mb-1">Confirm Password</p>
              <input type="password" name="password_confirmation" id="confirm_register_password" className="form-control rounded-pill" placeholder="Confirm password" required onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>

            <div className="register-buttons mt-4 text-center">
              <button type="submit" className="style-btn rounded-pill" to="/signin">Register</button>
            </div>
          </form>

          <div className="notice-account mt-3">
            <p>
              Already have an account?
              {' '}
              <span><Link className="login-link" id="register-on-login" to="/login">Login</Link></span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
