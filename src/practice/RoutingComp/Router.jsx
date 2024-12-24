import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Pricing from "./pricing";
import ContactUs from "./contact";
import AboutUs from "./about";
import PageNotFound from "./pagenotfound";
import LoginComp from "../LoginComp"

function Rout() {
    return (
        <div>
            <Router>
                <nav
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        backgroundColor: "aqua",
                        padding: "15px",
                        margin: "auto",
                    }}
                >
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Routes>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/login" element={<LoginComp/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Rout;