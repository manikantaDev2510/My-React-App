import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Home from "./Home";

export default function DynMov() {
    return (
        <BrowserRouter>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/home">Home</Link>
                <Link to="/movies">Movies</Link>

            </div>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/movies" element={<MovieList />}></Route>
                <Route path="/movies/:id" element={<MovieDetails />}></Route>
            </Routes>
        </BrowserRouter>
    );
}