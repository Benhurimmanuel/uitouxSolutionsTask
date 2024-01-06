const mongoose = require('mongoose');
const { USER_ACCOUNT } = require('../../API/V1/CONSTANTS/variables');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    userType: { type: String, default: USER_ACCOUNT },
});

userSchema.set("timestamps", true)


const User = mongoose.model("User", userSchema,);




module.exports = {
    User,
};
