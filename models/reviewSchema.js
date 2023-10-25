const mongoose = require("mongoose");

reviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        "type": "Date",
        required: true,
        trim: true
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;