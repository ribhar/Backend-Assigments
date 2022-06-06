const express = require('express');

const app = express();
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

app.get('/',(req,res)=>{
    res.end("welcome to express")
})
app.get('/arr',(req,res)=>{
    res.end(JSON.stringify([1,2,3,4,5,6,7,8,9,10]))
})
app.get('/obj',(req,res)=>{
    res.end(JSON.stringify({a:'a', b:"b",c:'c'}))
})

app.listen(8080,()=>{
    console.log('started server http://localhost:8080')
})