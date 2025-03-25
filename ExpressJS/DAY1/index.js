const express= require('express');

const app= express();



app.use("/contact/:id/:name", (req, res)=>{
    console.log(req.params);
    res.send('Hello About');
})

app.listen(4000, ()=>{
    console.log('Listening on port 4000');
})

app.use((req, res)=>{
    res.send('Hello Akshat Sharma');
})