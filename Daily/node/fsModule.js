const { log } = require("console");
const fs = require("fs");

//example-1
// fs.readFile("myfile1.txt", "utf-8", (err, data) => {
//   console.log(typeof data);
//   console.log(data.toString()); // also we can toString
// });

// first bahar wala console log print hoga uske bad readfile hoga
// console.log("hello");
// output => <Buffer 48 65 6c 6c 6f 20 53 74 75 64 65 6e 74 73>

//example 2
// fs.readFileSync("myfile1.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });
// console.log("hello again");
// this will print hello again because || becs callback by default asynchronous it does not support Sync

// function task1(filename) {
//   //   const a = fs.readFileSync("filename", "utf-8");
//   //   console.log(filename);

//   fs.readFile(filename, "utf-8", (err, data) => {
//     console.log(data);
//     //   console.log(data.toString()); // also we can toString
//   });
// }

// let arr = ["myfile1.txt", "myfile2.txt"];
// for (let i = 0; i < arr.length; i++) {
//   task1(arr[i]);
// }

//mam methos for multiple file
// function readData(fileName){
//     return new Promise(funnction(resolve,reject){

//     })
// }

// =======================================writing============================

// fs.writeFile("myfile1.txt", "This is file 2", (err, data) => {
//   console.log(err, data);
// });

// fs.appendFile("myfile2.txt", "hello", () => {});

// create a new folder
// fs.mkdir('datafile',()=>{
//     console.log('creating file')
// })

// fs.rmdir("datafile", () => console.log());
// fs.unlink("myfile3.txt", () => console.log("deletefile"));

// fs.rename("oldfilename.txt", "newfilename.txt", () => {});
// fs.copyFile("example.txt", "copiedfile.txt", () => {});

// =======================homework how to create new file==================== direct file

fs.open("newfile2.txt", "w", (err, file) => {
  console.log("File is opened in write mode.");
});
