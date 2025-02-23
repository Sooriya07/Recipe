import React from 'react'
import { Link } from 'react-router-dom'

const bgstyle={
  backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/food1.jpg')",
  backgroundPosition: "center",
  backgroundRrepeat: "no-repeat",
  backgroundSize: "cover",
  maxWidth:"100%",
  height: "100vh",
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
};

const bgstyle1={
  backgroundImage: "url('/table1.webp')",
  width:"100%",
  height:"100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Home = () => {
  return (
    <div class="main">
    <div class="home" style={bgstyle}>
      <img src="logo.png"/>
    </div>
    <div class="table" style={bgstyle1}>
      <div class="add">
      <Link to="/add"><button>ADD RECIPE</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Home
