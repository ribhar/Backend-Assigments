const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json())

morgan.token('body',(req)=> JSON.stringify(req.body));


app.use(morgan('BODY- :body, METHOD- :method, STATUS- :status, RESPONSE-LENGTH- :res[content-length], TIME_TAKEN- :response-time ms, DATE- :date[clf], HTTP_VERSION- HTTP/:http-version '))


app.get("/",(req,res)=>{

    res.send("This is Ritik Bhardwaj")

})

app.post("/post",(req,res)=>{

    res.status(201).send("post request")

})

app.listen(8080,()=>{

    console.log("Server running on port 8080")

})
