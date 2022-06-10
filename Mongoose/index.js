const express = require("express");

const {Movie,connection} = require("./db");

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.get("/movies",async(req,res)=>{

    const movies = await Movie.find();

    return res.json(movies);

})

app.post("/movies",(req,res)=>{

    const movie = new Movie({...req.body});

    movie.save((err,movie)=>{

        res.json(movie);

    })

})

app.listen(8080,async ()=>{

    try {

        await connection;

        console.log("Connection established");

    } catch {

        console.log("Connection faild")

    }

    console.log("Server running on 8080")
    
})