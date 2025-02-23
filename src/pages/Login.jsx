import React from 'react';
import { Link } from 'react-router-dom';

const bg={
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height:"100vh",
  backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/food1.jpg')",
  backgroundSize:"cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: "-1",
  filter:"blur(4px)",
};


const Login = () => {
  return (
    <div class="sign">
   <div class="full" style={bg}>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class=" m-auto">
                <div class="card">
                    <div class="card-body">
                            <div class="center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                            <h4>LOGIN</h4>
                            </div>
                        <form action="">
                            <input type="text"  class="form-control my-4 py-2" placeholder='Username'/>
                            <input type="password" class="form-control my-4 py-2" placeholder='Password'/>
                            <div class="text-center mt-3">
                                <button className="btn1 btn btn-info">LOGIN</button>
                                <a href="#" class="nav-link">Don't have a account? <Link to="/reg"><strong>  Register</strong></Link></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
