import React from 'react'
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div class="blur">
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col" id="navbarTogglerDemo01">
      <a class="navbar-brand">TASTY TALES</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page"onClick={()=>navigate("/home")}>Home</a>
        </li>
        
        <li class="nav-item a">
          <a class="nav-link" aria-current="page"onClick={()=>navigate("/myrec")}> My-Recipe</a>
        </li>
      </ul>
      <button class="nb btn btn-outline-light" type="submit" onClick={()=>navigate("/login")}>Login</button>
      <button class="nb btn btn-outline-light" type="submit" onClick={()=>navigate("/reg")}>Register</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
