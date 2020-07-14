import {Schema, model} from 'mongoose'
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose)
const UserModel =  model("User",userSchema)

export default UserModel