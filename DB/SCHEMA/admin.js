const mongoose = require('mongoose');
const { ADMIN_ACCOUNT } = require('../../API/V1/CONSTANTS/variables');

const adminSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    userType: { type: String, default: ADMIN_ACCOUNT },
});

adminSchema.set("timestamps", true)

const Admin = mongoose.model("Admin", adminSchema,);



module.exports = {
    Admin,
};
