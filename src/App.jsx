import React from "react";
import Home1 from "./home/Home1";
import Courses from "./courses/Courses";
import {Route,Routes} from "react-router-dom";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>


        
      </Routes>
     </div>
      
    </>
  );
}

export default App;
