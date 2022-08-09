import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import StudentPage from './pages/StudentPage/StudentPage';

function App() {
  return <Router>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/student" element={<StudentPage/>}/>
    </Routes>
  </Router>
}

export default App;
