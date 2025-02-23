import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Add from './pages/Add';
import Myrec from './pages/Myrec';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myrec" element={<Myrec/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Register/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </Router>
  );
}

export default App;
