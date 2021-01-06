const {Readable} = require('stream')
const fs = require('fs');

const firstRead = Readable

//iterable async operation
async function logChunks(readables) {
  for await(const chunk of readables){
    console.log(chunk);
  }
}

const readable = fs.createReadStream("./links.txt", { encoding: "utf-8" });
logChunks(readable);
