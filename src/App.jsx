import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Header } from './Components/Layout/Header';
import { SignIn } from './Components/SignIn';
import { SignUp } from './Components/SIgnUp';
import { CreatePassword } from './Components/CreatePassword';
import { Restaurants } from './Components/Restaurants';
import { Details } from './Components/Restaurants/Details';
import { AllUser } from './Components/AllUsers/AllUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/password" element={<CreatePassword />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/details" element={<Details />} />
        <Route path="/all-user" element={<AllUser />} />
        {/* <Route path="/citytocityride" element={<CityRide />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
