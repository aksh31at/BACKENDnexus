fetch("https://akshatsharma.com")

const response= await fetch('https:api.example.com/data',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:'Akshat', age:21})
});

//js object is an object based format.
//json object is a string or text based format.
//functions and undefined cant be sent in json key.

//Physical------->Physical
//        bits0/1          parser->helps converts json to js object
//                                 for cpp, python to understand