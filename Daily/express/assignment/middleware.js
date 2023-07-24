const myFile = require("./data");
module.exports = slugFilter = (req, res, next) => {
  if (!req.query.slugData) {
    res.send("<h1>Oh! hello kya dekhna hai ?</h1>");
  }
  if (req.query.slugData) {
    let title = myFile.find((elem) => {
      if (elem.slug == req.query.slugData) {
        return `${elem.title}`;
      }
    });
    res.send(`<h1>Title: </h1> <h2>${myFile.title}</h2>`);
  } else {
    next();
  }
};
