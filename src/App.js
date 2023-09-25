import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import CreateDevice from "./components/CreateDevice";
import Signup from "./components/Singup";
import Login from "./components/Login/index";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Home from "./components/Home";
import Details from './components/Details'
import DeviceDetails from "./components/DeviceDetail";
import DeviceSetting from "./components/DeviceSetting";
import Index from "./pages/index";
import Demo from "./pages/demo";
import Contact from "./pages/contact";
import Features from "./pages/features";
import Pricing from "./pages/pricing";



function App() {


  const user = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  
  console.log(user);
  return (
    <Router>
      <Routes>
        {user && userType === "admin" && (
          <Route path="/" exact element={<Home />} />
        )}
        {user && <Route path="/create/:id" exact element={<CreateDevice />} />}
        {user && <Route path="/details/:id" exact element={<Details />} />}
        {user && <Route path="/device/:id" exact element={<DeviceDetails />} />}
        {user && (
          <Route path="/setting/:id" exact element={<DeviceSetting />} />
        )}
        {/*  */}

        <Route path="/" element={<Index />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        {/*  */}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
