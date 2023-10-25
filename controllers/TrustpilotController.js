const mongoose = require("mongoose");
const Review = require("../models/reviewSchema");

const getReviews = async(req, res) => {
    const reviews = await Review.find();
    try {
        if (!reviews) {
            return res.status(404).json({
                mensaje: "Reviews no encontradas",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Reviews encontradas",
            status: 200,
            reviews
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const createReview = async(req, res) => {
    const { name, rating, title, description, date } = req.body;
    const review = await Review.findOne({ name, rating, title, review, date });
    try {
        if (review) {
            return res.status(400).json({
                mensaje: "Ya existe una review con ese nombre",
                status: 400
            })
        }
        const newReview = new Review({ name, rating, title, description, date });
        await newReview.save();
        return res.status(201).json({
            mensaje: "Review creada",
            status: 201,
            newReview
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }

}

module.exports = { getReviews, createReview }