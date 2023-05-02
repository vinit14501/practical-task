import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './login.scss';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './../../context/AuthContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState('password');
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  };

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: 'LOGIN_SUCCESS', payload: user });
          navigate('/');
        }
      );
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      toast.error('Username and Password is required.', toastOptions);
    }
  };

  return (
    <>
      <div className="login">
        <form>
          <h2>Login</h2>
          <div className="formInput">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput">
            <input
              type={inputType}
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <div
              className="eyeIcon"
              onClick={handleToggle}
            >
              {toggleEye ? <Visibility /> : <VisibilityOff />}
            </div>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="formLink">
            <span>Don't have an account? </span>
            <Link
              to="/register"
              className="formSignup"
              style={{ textDecoration: 'none' }}
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
