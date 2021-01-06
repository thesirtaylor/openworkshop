const http = require('http');
const os = require('os');
const hostname = '127.0.0.1';
const {createReadStream, createWriteStream} = require('fs');
const { Stream } = require('stream');
const fs = createReadStream('./links.txt', {encoding: "utf-8"});
const port = 3003;
const serve = http.createServer()

function datatime() {
     const date = new Date();
     const conDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}[${date.getHours()}:${date.getMinutes()}]`;
     console.log(conDate.toString());
}

const server = serve.on('request',function (req, res){
    res.statusCode = 200;
    datatime()
    // console.log(os.cpus())
    res.setHeader('Content-Type', 'text/plain')
    //because req itself is already a readable stream, we can attach the 
    //fs readable stream as a property of req
    req.fs = fs
    req.fs.on('data', function(chunk){res.write(
      `\n ----simulation from req----\n${chunk}\n----simulation ended----\n`
    );})
    fs.on('data', function(chunk){
        res.write(chunk);
    });
    fs.on('end', function(){
        res.end(`\n Streaming ended`);
    })
    fs.on('error', function(){
        res.write('Streaming error')
    })
   //res.download('11.jpg', 'downloadfile.jpg')
    // res.end(`Hello World, first Node server.\n The beginning of something really massive.`)
})
server.listen(port, hostname, ()=>{
    console.log(`Server at http://${hostname}:${port}/`);
})

// res = writable Stream, writes to the client from the server
//req = readable Stream, reads from the client

console.log(Stream);