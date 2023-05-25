import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';


async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {

    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }

    return (
        <div id="main-wrapper" class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="card border-0">
                        <div class="card-body p-0">
                            <div class="row no-gutters">
                            <div class="col-lg-6 d-none d-lg-inline-block">
                                    <div class="account-block rounded-right">
                                        <div class="overlay rounded-right"></div>
                                        <div class="account-testimonial">
                                            <h4 class="text-white mb-4"></h4>
                                            <p>Encuentra hasta el libro que no estabas buscando.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="mb-5">
                                            <h3 class="h4 font-weight-bold text-theme">Tu Libreria Aliada</h3>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Username or Email</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" onChange={e => setUserName(e.target.value)}/>
                                            </div>
                                            <div class="form-group mb-5">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
                                            </div>
                                            <button type="submit" class="btn btn-theme">Sign In</button>
                                            <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a>
                                        </form>
                                    </div>
                                </div>

                                
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
