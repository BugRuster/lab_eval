import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-white hover:text-gray-200">Signup</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;