import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Login.css';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <section className='ftco-section'>
      <div className={`toast ${error ? 'show' : ''}`} id='toast'>
        <div className='toast-header'>
          <strong className='me-auto'>Error</strong>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='toast'
          ></button>
        </div>
        <div className='toast-body'>
          <div>{error}</div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12 col-lg-10'>
            <div className='wrap d-md-flex'>
              <div className='text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last'>
                <div className='text w-100'>
                  <h2>Welcome to login</h2>
                  <p>Don't have an account?</p>
                  <Link
                    className='btn btn-white btn-outline-white mx-2'
                    to='/signup'
                  >
                    Sign Up
                  </Link>
                  <Link className='btn btn-white btn-outline-white mx-2' to='/'>
                    Home
                  </Link>
                </div>
              </div>
              <div className='login-wrap p-4 p-lg-5'>
                <div className='d-flex'>
                  <div className='w-100'>
                    <h3 className='mb-4' style={{ color: 'black' }}>
                      Sign In
                    </h3>
                  </div>
                </div>
                <form onSubmit={() => {}} className='signin-form'>
                  <div className='form-group mb-3'>
                    <label className='label' htmlFor='name'>
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type='email'
                      className='form-control'
                      placeholder='Username'
                      required
                    />
                  </div>
                  <div className='form-group mb-3'>
                    <label className='label' htmlFor='password'>
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type='password'
                      className='form-control'
                      placeholder='Password'
                      required
                    />
                  </div>
                  <div className='form-group' id='submit'>
                    <button
                      disabled={loading}
                      type='submit'
                      className='form-control btn btn-primary submit px-3'
                    >
                      {loading ? 'Sending...' : 'Sign In'}
                    </button>
                  </div>
                  <div className='form-group d-md-flex mt-3'>
                    <div className='w-50 text-left'>
                      <label className='checkbox-wrap checkbox-primary mb-0'>
                        Admin
                        <input
                          type='radio'
                          name='choice'
                          defaultValue='admin'
                          defaultChecked
                        />
                        <span className='checkmark' />
                      </label>
                    </div>
                    <div className='w-50 text-left'>
                      <label className='checkbox-wrap checkbox-primary mb-0'>
                        Candidate
                        <input
                          type='radio'
                          name='choice'
                          defaultValue='candidate'
                        />
                        <span className='checkmark' />
                      </label>
                    </div>
                  </div>
                  <div className='form-group d-md-flex float-left'>
                    <div className='text-md-right'>
                      <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
