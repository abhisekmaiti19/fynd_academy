const express = require("express");

const app = express();
const path = require("path");

const port = 6700;

const reqFilter = (rq, res, next) => {
  if (!req.query.age) {
    res.send("<h1>Heloo please enter youre age</h1>");
  } else if (rq.query.age < 18) {
    res.send("<h1>heloo please !!!</h1>");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/home", (rq, res) => {
  res.send("hello world");
});

// app.use("",express.static(path.join(__dirname, "public")));

app.get("/contact", (req, res) => {
  // res.send("About page");
  res.sendFile(path.join(__dirname, "demo.html"));
});

app.listen(port, () => {
  console.log(`Server is listening at port number ${port}`);
});
