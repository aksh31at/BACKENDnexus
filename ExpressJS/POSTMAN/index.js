const express=require('express');
const app=express();


app.get('/user',(req,res)=>{
    console.log(req);
    res.send({name:"Akshat"});
})

app.post("/user", (req,res)=>{
    console.log('Data saved successfully');
    res.send("Data saved successfully");
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})