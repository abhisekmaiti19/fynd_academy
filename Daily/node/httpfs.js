const http = require("http");
const fs = require("fs");
const port = 3300;

// 2 res 32 MAX limit
const server = http.createServer();
const rstream = fs.createReadStream("data.csv");
// server.on("request", (req, res) => {
// //   fs.readFile("Data.csv", (err, data) => {
// //     if (err) return console.log(err);
// //     res.end(data);
// //   });

//     const rstream  = fs.createReadStream('data.csv');
//     rstream.on('data',(chunkdata1)=>{
//         res.end()
//     })

// });

// ====================================

//pipe

rstream.pipe();
