// student = {
//   name: "Abhisek",
//   uid: 48,
//   color: "r&d",
// };

function smartwork() {
  console.log("doing nothing");
  return 0;
}

function hardwork() {
  console.log("doing nothing");
  return 1;
}

let data = {
  firstName: "hello",
};

//telling others that u can use myself
// module.export = student;

module.export = smartwork;
module.export = hardwork;
module.export = data;

// module.export = data, hardwork, smartwork;
// it will take only data

module.export = { data, hardwork, smartwork };
