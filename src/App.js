// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Home } from './components/Home.js';
import Login from './screens/Login.js';
import { Routes, Route } from 'react-router-dom';
import Signup from './screens/Signup.js';
import ForgotPassword from './screens/ForgotPassword.js';
import Candidate_Dashboard from './screens/CandidatePanel/scenes/Candidate_Dashboard.js';
import Candidate_Attendance from './screens/CandidatePanel/scenes/Candidate_Attendance.js';
import Candidate_StudyMaterial from './screens/CandidatePanel/scenes/Candidate_StudyMaterial.js';
import Candidate_ViewRegistration from './screens/CandidatePanel/scenes/Candidate_ViewRegistration.js';
import Candidate_Result from './screens/CandidatePanel/scenes/Candidate_Result.js';
import Admin_Dashboard from './screens/AdminPanel/scenes/Admin_Dashboard.js';
import Admin_Attendance from './screens/AdminPanel/scenes/Admin_Attendance.js';
import Admin_CandidateProfile from './screens/AdminPanel/scenes/Admin_CandidateProfile.js';
import Admin_Result from './screens/AdminPanel/scenes/Admin_Result.js';
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
        <Route path='/candidate-dashboard' element={<Candidate_Dashboard />} />
        <Route path='/candidate-attendance' element={<Candidate_Attendance />} />
        <Route path='/candidate-studymaterial' element={<Candidate_StudyMaterial />} />
        <Route path='/candidate-result' element={<Candidate_Result />} />
        <Route path='/candidate-viewregistration' element={<Candidate_ViewRegistration />} />

        <Route path='/admin-dashboard' element={<Admin_Dashboard />} />
        <Route path='/admin-attendance' element={<Admin_Attendance />} />        
        <Route path='/admin-result' element={<Admin_Result />} />
        <Route path='/admin-candidateprofile' element={<Admin_CandidateProfile />} />



      </Routes>
    </div>
  );
}

export default App;
