import Footer from "./combonent/Footer";
import Corses from "./combonent/Corses";
import Nav from "./combonent/Nav";
import React from "react";
import Home from "./combonent/Home";
import Corsdetels from "./combonent/Corsdetels";
import { Route, Router, Routes } from "react-router-dom";
import RegisterForm from "./combonent/Register";
import LoginForm from "./combonent/Login";
import Checkoutbox from "./combonent/Checkoutbox";
import AllCousres from "./combonent/AllCousres";
import CategoryCourse from "./combonent/CategoryCourse";
import INSTRUCTOR from "./combonent/Instructor";

function App() {
  return (
    <>
      <React.Fragment>
        <Nav />
        <Routes>
          <Route path="/instructor" element={<INSTRUCTOR />} />
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Corsdetels />} />
          <Route path="/corses" element={<Corses />} />
          <Route path="/log" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/checkout" element={<Checkoutbox />} />
          <Route path="/Allcourses" element={<AllCousres />} />
          <Route path="/category" element={<CategoryCourse />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
