
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {Home} from './components/Home.js';
import Login from './screens/Login.js';
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './screens/Signup.js';
import ForgotPassword from './screens/ForgotPassword.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
