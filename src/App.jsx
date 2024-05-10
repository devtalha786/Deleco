import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Header } from './Components/Layout/Header';
import { SignIn } from './Components/SignIn';
import { SignUp } from './Components/SIgnUp';
import { CreatePassword } from './Components/CreatePassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/password" element={<CreatePassword />} />
        {/* <Route path="/citytocityride" element={<CityRide />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
