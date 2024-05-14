import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AllUser } from './Components/AllUsers/AllUser';
import { CreatePassword } from './Components/CreatePassword';
import { Home } from './Components/Home';
import { Restaurants } from './Components/Restaurants';
import { Details } from './Components/Restaurants/Details';
import { SignUp } from './Components/SIgnUp';
import { SignIn } from './Components/SignIn';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import store from "./store";

function App() {
  return (
    <Provider store={store}>
                    <ToastContainer position='top-center' />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/password" element={<CreatePassword />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/all-user" element={<AllUser />} />
        {/* <Route path="/citytocityride" element={<CityRide />} /> */}
      </Routes>
    </Router>
    </Provider>

  );
}

export default App;
