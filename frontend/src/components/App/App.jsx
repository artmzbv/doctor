import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import PageNotFound from "../PageNotFound/PageNotFound"
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
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
