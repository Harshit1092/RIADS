// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Home } from './components/Home.js';
import Login from './screens/Login.js';
import { Routes, Route } from 'react-router-dom';
import Signup from './screens/Signup.js';
import ForgotPassword from './screens/ForgotPassword.js';
import Dashboard from './screens/CandidatePanel/scenes/Dashboard.js';
import Attendance from './screens/CandidatePanel/scenes/Attendance.js';
import StudyMaterial from './screens/CandidatePanel/scenes/StudyMaterial.js';
import ViewRegistration from './screens/CandidatePanel/scenes/ViewRegistration.js';
import About from './screens/about';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/candidate-dashboard' element={<Dashboard />} />
        <Route path='/candidate-attendance' element={<Attendance />} />
        <Route path='/candidate-studymaterial' element={<StudyMaterial />} />
        <Route
          path='/candidate-viewregistration'
          element={<ViewRegistration />}
        />
      </Routes>
    </div>
  );
}

export default App;
