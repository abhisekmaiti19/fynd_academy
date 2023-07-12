//example-1
// const http = require("http"); //step 1

// const server = http.createServer((req, res) => {
//   res.end("<h1>First Example of http</h1>");
// });

//res.end ==> lik return

// server.listen(3400);

// =============================================================

//example 2
// const http = require("http");

// const port = 3400;
// http
//   .createServer((req, res) => {
//     res.end("<h1> hello</h1>");
//   })
//   .listen(port);

//===========================================================

//example 3
// const { log } = require("console");
// const http = require("http");

// const port = 3400;
// const server = http.createServer((req, res) => {
//   res.end("<h1> hello</h1>");
// });

// server.listen(port, () => {
//   console.log("hello running");
// });

//example 4
// const { log } = require("console");
// const http = require("http");

// const port = 3400;
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("<h1>hello home</h1>");
//   } else if (req.url == "/about") {
//     res.setHeader("content-type", "text/html");
//     res.end("<h1>Hello my name is about</h1>");
//   } else {
//     res.statusCode = "404";
//     res.end("<h1>Error !</h1>");
//   }
// });

// server.listen(port, () => {
//   console.log("hello running");
// });
