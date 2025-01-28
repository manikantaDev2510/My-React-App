import React, { useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import { app } from "./firebaseCong";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default function MainPage() {
    const [userLoggedIn, setUserLoggedIn] = useState(null);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth]);

    return (
        <div>
            <h1>Main Page</h1>
            <hr />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={userLoggedIn ? <Home /> : <Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={userLoggedIn ? <Login />:<Home />} />
                </Routes>
                <nav>
                    <Link to="/">Go to Home</Link>
                    <hr />
                    <Link to="/signup">Go to Signup</Link>
                    <hr />
                    <Link to="/login">Go to Login</Link>
                </nav>
            </BrowserRouter>
        </div>
    );
}
