import http from "http";

const server = http.createServer((req,res) =>{

    console.log("Request method:", req.method);
    console.log("Request url:", req.url);

    res.write("This is Node.js server. \n");
    res.write(`You requested : ${req.url}\n`);
    res.write(`Your method : ${req.method}`)
    res.end();
})

server.listen(3000, ()=>{
    console.log("Surver is running.");
});