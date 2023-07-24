const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mongosedb")
  .then(() => console.log("Connection Established"))
  .catch(() => console.log("Connection Failed"));

//create schemaa
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cType: String,
  noVideos: Number,
  author: String,
  active: Boolean,
});

// create collection
// const DataModel = new mongoose.model("Datarecord",courseSchema)

const CourseRecord = new mongoose.model("CourseRecord", courseSchema);

// const ReactData = new CourseRecord({
//   title: "React Js",
//   cType: "Frontend",
//   noVideos: 48,
//   author: "Richa",
//   active: true,
// });

// ReactData.save();

// create document using async await

// const createDocumnet = async () => {
//   try {
//     const vueData = new CourseRecord({
//       title: "React Js",
//       cType: "Frontend",
//       noVideos: 48,
//       author: "Richa",
//       active: true,
//     });
//     const result = await vueData.save();
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// };

const createDocumnet = async () => {
  //   try {
  //     const Jsdata = await CourseRecord.create({
  //       title: "Javas",
  //       cType: "Frontend-Backend",
  //       noVideos: 48,
  //       author: "Richa",
  //       active: true,
  //     });
  //   } catch (e) {
  //     console.log("error");
  //   }

//   try {
//     const courseList = await CourseRecord.insertMany([
//       {
//         title: "Node-modified",
//         cType: "Frontend-Backend",
//         noVideos: 480,
//         author: "Richa Arora Mam",
//         active: true,
//       },

//       {
//         title: "IOT-mod",
//         cType: "IOT-Course",
//         noVideos: 180,
//         author: "Mohit Bhai",
//         active: true,
//       },

//       {
//         title: "IOT-WIFI-mod",
//         cType: "IOT-Course-WIFI",
//         noVideos: 500,
//         author: "self",
//         active: true,
//       },
//     ]);
//   } catch (e) {
//     console.log("error");
//   }
// };



// ! Important
// multiple documnet with save method 
const mlCourse = new CourseRecord({
    title: "M course",
    cType: "Frontend-Backend",
    noVideos: 48,
    author: "Abhisek Maiti",
    active: true,
  });

  const aiCourse = new CourseRecord({
    title: "AI course",
    cType: "Frontend-Backend",
    noVideos: 48,
    author: "Abhisek Maiti",
    active: true,
  });








  // Read Data
  .find().select()






createDocumnet();
