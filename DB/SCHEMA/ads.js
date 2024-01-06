const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    adTitile: { type: String, unique: true, required: true },
    adsDescription: { type: String, required: true },
    adsImage: { type: String, required: true },
    adsLink: { type: String, required: true },
});

adsSchema.set("timestamps", true)

const Ads = mongoose.model("ads", adsSchema,);


module.exports = {
    Ads,
};
