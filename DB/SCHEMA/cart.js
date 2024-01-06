const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productDetails: {
        _id: { type: mongoose.Schema.ObjectId },
        // productName: { type: String, required: true },
        // productImage: { type: String, required: true },
        // productPrice: { type: Number, required: true },
        quantity: { type: Number, required: true },
    },
    userId: { type: mongoose.Schema.ObjectId, required: true },
    orderId: { type: mongoose.Schema.ObjectId, required: false },
    orderStatus: { type: String, enum: ['pendingPurchase', 'purchaseCompleted', 'purchaseCancelled'], default: 'pendingPurchase' }
});

cartSchema.set("timestamps", true)

const Cart = mongoose.model("Cart", cartSchema,);


module.exports = {
    Cart,
};
