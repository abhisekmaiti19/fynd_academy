const express = require("express");
const app = express();
const port = 5100;
const slugFilter = require("./middleware");
const route = express.Router();
route.use(slugFilter);
app.use("/", route);
app.listen(port, () => {
  console.log(`Server Listening`);
});
