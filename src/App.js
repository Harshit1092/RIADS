// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home.js';
import PrivateRoute from './components/PrivateRoute.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import About from './screens/about';
import Admin_Attendance from './screens/AdminPanel/scenes/Admin_Attendance.js';
import Admin_CandidateProfile from './screens/AdminPanel/scenes/Admin_CandidateProfile.js';
import Admin_Dashboard from './screens/AdminPanel/scenes/Admin_Dashboard.js';
import Admin_Result from './screens/AdminPanel/scenes/Admin_Result.js';
import Candidate_Attendance from './screens/CandidatePanel/scenes/Candidate_Attendance.js';
import Candidate_Dashboard from './screens/CandidatePanel/scenes/Candidate_Dashboard.js';
import Candidate_Result from './screens/CandidatePanel/scenes/Candidate_Result.js';
import Candidate_StudyMaterial from './screens/CandidatePanel/scenes/Candidate_StudyMaterial.js';
import Candidate_ViewRegistration from './screens/CandidatePanel/scenes/Candidate_ViewRegistration.js';
import ForgotPassword from './screens/ForgotPassword.js';
import Login from './screens/Login.js';
import Register from './screens/register';
import Signup from './screens/Signup.js';
import UpdateProfile from './screens/UpdateProfile.jsx';
import CandidateTest from './screens/CandidatePanel/scenes/CandidateTest.jsx';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route
            path='/update-profile'
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path='/candidate-dashboard'
            element={
              <PrivateRoute>
                <Candidate_Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/candidate-attendance'
            element={
              <PrivateRoute>
                <Candidate_Attendance />
              </PrivateRoute>
            }
          />
          <Route
            path='/candidate-studymaterial'
            element={
              <PrivateRoute>
                <Candidate_StudyMaterial />
              </PrivateRoute>
            }
          />
          <Route
            path='/candidate-result'
            element={
              <PrivateRoute>
                <Candidate_Result />
              </PrivateRoute>
            }
          />
          <Route
            path='/candidate-viewregistration'
            element={
              <PrivateRoute>
                <Candidate_ViewRegistration />
              </PrivateRoute>
            }
          />

          <Route
            path='/admin-dashboard'
            element={
              <PrivateRoute>
                <Admin_Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/admin-attendance'
            element={
              <PrivateRoute>
                <Admin_Attendance />
              </PrivateRoute>
            }
          />
          <Route
            path='/admin-result'
            element={
              <PrivateRoute>
                <Admin_Result />
              </PrivateRoute>
            }
          />
          <Route
            path='/admin-candidateprofile'
            element={
              <PrivateRoute>
                <Admin_CandidateProfile />
              </PrivateRoute>
            }
          />
          <Route 
            path='/test'
            element={<CandidateTest/ >}
          />

            
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
