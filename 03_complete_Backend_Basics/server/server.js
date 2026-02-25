// common js
// const express = require("express")

//module
import express from "express"

const app = express();
// middleware :: convert all the data coming from requset in json format to body (json to readable object format)
app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.body)
    console.log(res.send("Hello Express"))
})
// this get request is from frontend and (res.send )     message will be sent by the backend back to the client(frontend)
// and also req contain the info requested by the frontend response will be send by the backend to the frontend
app.get("/about",(req,res)=>{
    console.log(res.send("about route"))
})


app.post("/create-user",(req,res)=>{
    console.log(req.body);
  res.send({
    backendResponse : `Hey, ${req.body.name} data is uploaded successfully.`
  })
    
})




app.listen(5000,()=>{
    console.log("Server is running on https://localhost:5000")
})
