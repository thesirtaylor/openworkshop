const {createReadStream} = require('fs');
let file = createReadStream("./links.txt", { encoding: "utf-8" });

//paused stream mode
function pausedStream() {
  file.on("readable", function (chunk) {
    while ((chunk = file.read()) != null) {
      console.log(chunk);
    }
  });
  file.on("end", function () {
    console.log("Data done reading");
  });
}
// pausedStream()

//flowing stream mode
function flowingStream() {
  file.on('data', function(chunk) {
    console.log('We started reading data');
    console.log(chunk);
  })
  file.on('end', function (chunk) {
    console.log('Data streaming ended');
  })
  file.on('error', function(error) {
   console.log('We encountered an error', error); 
  })
}

flowingStream();