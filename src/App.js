import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StudentPage from "./pages/StudentPage/StudentPage";
import StudentDashboard from "./layout/StudentDashboard/StudentDashboard";
import StudentCourse from "./layout/StudentCourse/StudentCourse";
import QuizPage from "./pages/QuizPage/QuizPage";
import InstructorPage from "./pages/InstructorPage/InstructorPage";
import InstructorDashboard from "./layout/InstructorDashboard/InstructorDashboard";
import VerifiedPage from "./pages/VerifiedPage/VerifiedPage";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

// TODO
// 1. Add course program details (CRUD)
// 2. Add course program form

function App() {
  return (
    <Router>
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="student" element={<StudentPage />}>
          <Route path="dashboard" element={<StudentDashboard />}></Route>
          <Route path="course" element={<StudentCourse />}></Route>
        </Route>
        <Route path="quiz" element={<QuizPage />} />
        <Route path="instructor" element={<InstructorPage />}>
          <Route path="dashboard" element={<InstructorDashboard />}></Route>
        </Route>
        <Route path="verified" element={<VerifiedPage />} />
        <Route path="student/course/:courseId" element={<CourseDetails />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
