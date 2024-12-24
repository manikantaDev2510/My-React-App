import React from 'react'
import { useParams} from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function MovieDetails() {
    // const movies = [
    //     { id: "1", movie: "Pushpa", cast: ["AA", "Reshmika", "Sukimar"],image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/kissik-pushpa-2-song-243011631-1x1.jpg?VersionId=GmsnDS.RMiQX3Joq2qBmUyNDO5fB_6t3" },
    //     { id: "2", movie: "Devera", cast: ["NTR", "jahnavi", "shiva"] , image:"https://i.ytimg.com/vi/ZfdPBVlX-Pw/maxresdefault.jpg"},
    //     { id: "3", movie: "OG", cast: ["PSPK", "Priyanka", "Sujitj"] ,image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/OG_Poster.jpg/220px-OG_Poster.jpg"},
    //     { id: "4", movie: "Salaar", cast: ["Prabhas", "Shruthi", "Prashanth"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8liosYPhKGoWvLoiQbFr40EmGT1LjIzwOg&s" }
    // ];
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setMovies(res.data))
    }, [])

    const { id } = useParams();
    const move=movies.find((a) => a.id == id)
    if(!move){return(<h1>
        movies not found
    </h1>
    )}
    return (
        <div>
        {/* <h1>{move.movie}</h1>
        <img src={move.image} height="100" width="100"alt={move.movie} /> */}
        </div>
    )
}