const ModReview = require('../models/modReview');
const mongoose = require('mongoose')

module.exports.getUserReviews = async (req, res) => {
    const user_id = req.user._id

    const reviews = await ModReview.find({ user: user_id}).sort({createdAt: -1})

    res.status(200).json(reviews)
};