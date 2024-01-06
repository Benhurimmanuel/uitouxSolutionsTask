const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, unique: true, required: true },
    productDescription: { type: String, required: true },
    productImage: { type: String, required: true },
    productPrice: { type: Number, required: true },
    categoryDetails: {
        _id: { type: String, required: true },
        categoryName: { type: String, required: true },
    },
    ratings: {
        "1star": { type: Number, default: 0 },
        "2star": { type: Number, default: 0 },
        "3star": { type: Number, default: 0 },
        "4star": { type: Number, default: 0 },
        "5star": { type: Number, default: 0 },
    },
    averageRating: { type: Number, default: 0 },
    quantityAvailable: { type: Number, required: true },
    tags: { type: Array, required: true },

});

productSchema.set("timestamps", true)

const Product = mongoose.model("product", productSchema,);


module.exports = {
    Product,
};
