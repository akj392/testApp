const express= require('express');
const path = require('path');
const http = require('http');
const app= express();

const server= http.createServer(app);

/*var PORT= process.env.PORT;
server.listen(PORT,()=>{
    console.log(`Server listening at PORT ${PORT}`);
});*/

const PORT= process.env.PORT || 3000;

server.listen(PORT,()=> {console.log(`server running on port ${PORT}`)});


app.use(express.static(path.join(__dirname,"./public")));


/*
app.get('/', (req,res)=>{
    res.writeHead(200);
    res.write("<h1>NODE.JS Abhishek Kumar Jha</h1>");
    res.end();
})*/