const mongoose=require("mongoose");
const { Schema } = mongoose;

const usuaries = new Schema(
    {
        name:{type:String, required: true},
        lastName:{type:String, required:true},
        email:{type:String, required:true},
        cellPhone:{type:Number, required:true},
        contraseña:{type:String, required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports=mongoose.model("Usuaries", usuaries);