import React from "react";
import PageContainer from "./container/PageContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Footer from "./components/Footer/Footer";
import "./App.css"
import TopNavbar from "./components/Navbar/TopNavbar/TopNavbar";
import NotFound from "./pages/NotFound"
import WhatsAppIcon from "./components/WhatsAppIcon/WhatsAppIcon"; 
import SupportIcon from "./components/SupportIcon/SupportIcon";
function App() {
  return (
    <>
       <WhatsAppIcon/> 
       <SupportIcon/>
      <PageContainer>
        <Router>
          <TopNavbar/>
          <Navbar/> 
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="hakkımızda" element={<About/>} />
              <Route path="servislerimiz" element={<Services/>} />
              <Route path="iletişim" element={<Contact/>} />
              <Route path="konum" element={<Location/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
        </Router>
      </PageContainer>
    </>
  );
}

export default App;
