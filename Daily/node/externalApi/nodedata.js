const https = require("https");
const external_api = "https://jsonplaceholder.typicode.com/posts";

const callfromHttp = (callback) => {
  https.get(external_api, (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chank;
    });

    resp.on("end", () => {
      return callback(data);
    });

    resp;
  });
};
