const {pipeline} = require('stream');
const {createReadStream, createWriteStream} = require('fs');
const zlib = require('zlib');
const { on } = require('process');



pipeline(
  createReadStream('./In Time.mkv'),
  zlib.createDeflate(),
  createWriteStream('./In Time.mkv.gz'),
  (err, data)=>{
    err => console.log('err', err),
    data => data.on('end', console.log('Data done sending'))
  }
);
