// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017" 

// const connectToMongo = ()=>{
//      mongoose.connect(mongoURI, ()=>{
//      console.log("connected to mongo Successfully");
//    })
// }


//  module.exports = connectToMongo;

const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1/inotebook";

// const mongoURI = "mongodb://127.0.0.1/";
// const mongoURI = "mongodb://localhost:27017" 

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;