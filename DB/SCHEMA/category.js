const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: { type: String, unique: true, required: true },
    categoryDescription: { type: String, required: true },
    categoryImage: { type: String, required: true },
});

categorySchema.set("timestamps", true)

const Category = mongoose.model("category", categorySchema,);


module.exports = {
    Category,
};
