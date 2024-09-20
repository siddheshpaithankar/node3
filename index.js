console.log("sid");
  
const http=require("http");//import http module
const http=require("fs");//import fs module


const myserver=http.createServer((req,res)=>{//create server method is used to create a new server 
    console.log("new request");
    res.end("hello from server");
})
 
myserver.listen(8000,()=>console.log("server started"))


