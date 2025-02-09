import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import PageNotFound from "../PageNotFound/PageNotFound"
import Service from "../Service/Service"
import Lecture from "../Lecture/Lecture"
import Article from "../Article/Article"
import TimeBooking from "../TimeBooking/TimeBooking";
import LectureBooking from "../LectureBooking/LectureBooking";
import { usePageTracking } from "../../utils/tracking";

function App() {
  const [activeSection, setActiveSection] = useState("1");
  
  usePageTracking()

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
    <Routes>
      <Route exact path="/doctor" element={<Main activeSection={activeSection} setActiveSection={setActiveSection} />}/>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/services/:id" element={<Service />} />
      <Route path="/lectures/:id" element={<Lecture />} />
      <Route path="/time-booking" element={<TimeBooking />} />
      <Route path="/lecture-booking" element={<LectureBooking />} />
      <Route path="/articles/:id" element={<Article />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
