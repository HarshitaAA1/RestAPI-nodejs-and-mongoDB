const express=require("express")
const app=express()
const coursesRouter=require("./routes/courses")
require("dotenv").config()
const bodyParser=require('body-parser')
const mongoose= require('mongoose')

app.use(bodyParser.json())
app.use("/api/v1/courses",coursesRouter)

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.listen(process.env.port,()=>{

    console.log("server is running ");
});