fetch("https://akshatsharma.com")

const response= await fetch('https:api.example.com/data',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:'Akshat', age:21})
});