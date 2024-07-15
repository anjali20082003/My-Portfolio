import React from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";

 
const App = () => {
    return(
        <Router>
            
            <Header />
            <Routes>
                <Route path ="/" element={<Home/>} />
                <Route path ="/About" element={<About/>} />
                <Route path ="/Skills" element ={<Skills/>} />
                <Route path ="/Projects" element ={<Projects/>} />
                
            </Routes>
            <Footer />
        </Router>
        
        
    );
};
export default App;
