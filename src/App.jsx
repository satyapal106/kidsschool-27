import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
function App() {
 

  return (
    <>
      
      <Router>
        <Routes>
          {/* <Route path="/branch/:branch_url/:url" element={<HomeBranch />} />
          <Route path="/branch/:branch_url/:url/login" element={<Login />} />
          <Route path="/branch/:branch_url/:url/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/branch/:branch_url/:url/teacher" element={<TeacherLogin />} />
          <Route path="/branch/:branch_url/:url/teacher-login" element={<Tlogin />} />
          <Route path="/branch/:branch_url/:url/teacher-signup" element={<Tsignup />} />
          <Route path="/mobile-select-class" element={<MobileSelectclass />} />
          <Route path="/branch/:branch_url/:url/mobile-select-subject" element={<MobileSelectSubject />} />
          <Route path="/mobile-subject-detail" element={<MobileSubjectDetails />} />
          <Route path="/branch/:branch_url/:url/select-class" element={<SelectClass />} />
          <Route path="/branch/:branch_url/:url/select-subject" element={<SelectSubject />} />
          <Route path="/subject-English" element={<SubjectDetails />} />
          <Route path="/branch/:branch_url/:url/subject/:subject_url" element={<SubjectType />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
