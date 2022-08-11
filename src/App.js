import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import StudentPage from './pages/StudentPage/StudentPage';
import StudentDashboard from './layout/StudentDashboard/StudentDashboard';
import StudentCourse from './layout/StudentCourse/StudentCourse';
import CourseDetails from './layout/CourseDetails/CourseDetails';

function App() {
  return <Router>
    <Routes>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="register" element={<RegisterPage/>}/>
      <Route path="student" element={<StudentPage/>}>
        <Route path="dashboard" element={<StudentDashboard/>}></Route>
        <Route path="course" element={<StudentCourse/>}></Route>
      </Route>
    </Routes>
  </Router>
}

export default App;
