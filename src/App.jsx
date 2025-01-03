import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

// import Profile from './components/auth/Profile';
// import SignIn from './componen ts/auth/SignIn';
 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import News from './pages/News';

import Events from './pages/Events';
import AlumniDirectory from './pages/AlumniDirectory';
import GetInvolved from './pages/GetInvolved';
import JobBoard from './pages/JobBoard';
import AlumniProfile from './pages/AlumniProfile';


function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup/>} />
   
            {/* Formerly Protected Routes (Now Public) */}
            <Route path="/events" element={<Events />} />
            <Route path="/alumni" element={<AlumniDirectory />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/alumni-profile" element={<AlumniProfile />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;