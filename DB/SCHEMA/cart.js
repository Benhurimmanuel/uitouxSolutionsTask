const mongoose = require('mongoose');
const { PENDING_PURCHASE, COMPLETED_PURCHASE, CANCELLED_PURCHASE } = require('../../API/V1/CONSTANTS/variables');

const cartSchema = new mongoose.Schema({
    productDetails: {
        _id: { type: mongoose.Schema.ObjectId },
        quantity: { type: Number, required: true },
    },
    userId: { type: mongoose.Schema.ObjectId, required: true },
    orderId: { type: mongoose.Schema.ObjectId, required: false },
    orderStatus: { type: String, enum: [PENDING_PURCHASE, COMPLETED_PURCHASE, CANCELLED_PURCHASE], default: PENDING_PURCHASE }
});

cartSchema.set("timestamps", true)

const Cart = mongoose.model("Cart", cartSchema,);


module.exports = {
    Cart,
};
