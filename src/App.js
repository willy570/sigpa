import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import { Login } from "./auth/login/login";
import { Register } from "./auth/signup/Register";
import { Home } from "./home/Home";


function App() {
 return(
   <>
   <Router>
     <Routes>
      <Route path="/" caseSensitive={false} element={<Login/>}/>
      <Route path="/register" caseSensitive={false} element={<Register />} />
       <Route path="/home" caseSensitive={false} element={<Home />} />
      
     </Routes>
   </Router>
   </>
 );
}

export default App;
