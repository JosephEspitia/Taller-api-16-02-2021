const env=require("dotenv");
const mongoose= require("mongoose");

env.config()
const uri = process.env.MONGO_ATLAS;

mongoose
    .connect(uri)
    .then(db=>console.log("db connected"))
    .catch(err=> console.error(err));

module.exports= mongoose;