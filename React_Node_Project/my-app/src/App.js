
import './App.css';
import ReactDOM from "react-dom/client";
import {Routes, Route} from "react-router-dom";
import {Login} from "./Screens/Login";
import {Home} from "./Screens/Home";
import {NewUser} from "./Screens/NewUser";
import {NewPassword} from "./Screens/NewPassword";
import {Dashboard} from "./Screens/Dashboard"
import { Map } from './essai_map';


function App()  {
    return(
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<NewUser />} />
          <Route path="password" element={<NewPassword />} />
          <Route path="home/dashboard" element={<Dashboard />} />
        </Routes>
    )
        
  }


export default App;
