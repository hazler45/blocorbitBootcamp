
import {model, models, Schema } from "mongoose";
const userSchema = new Schema ({
    FirstName:{
        type:String,
        required: true,
    },
 }
);
const user = models.user|| model("user",userSchema);
export default user;