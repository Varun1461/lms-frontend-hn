import './App.css';
import { Route,Routes } from 'react-router-dom';

import HomePage from '../src/Pages/HomePage.jsx';
import AboutUs from '../src/Pages/AboutUs.jsx';
import NotFound from '../src/Pages/NotFound.jsx';
import Signup from '../src/Pages/Signup.jsx';
import Login from '../src/Pages/Login.jsx';


function App() {
  return (
  
    <>
    <Routes>
     <Route path="/" element={<HomePage />} ></Route> 
     <Route path="/about" element={<AboutUs />} ></Route>

     <Route path="/signup" element={<Signup />} ></Route>
     <Route path="/login" element={<Login />} ></Route>

     <Route path="*" element={<NotFound />}></Route>


     </Routes>
   
    </>
  )

   
}

export default App;
