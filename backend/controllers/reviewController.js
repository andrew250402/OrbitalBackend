const ModReview = require('../models/modReview');
const mongoose = require('mongoose')

module.exports.getUserReviews = async (req, res) => {
    const user_id = req.user._id

    const reviews = await ModReview.find({ user: user_id}).sort({createdAt: -1})

    res.status(200).json(reviews)
};

module.exports.newReview = async (req, res) => {
    const user_id = req.user._id

    const {module, grade, yearTaken, description, review, _id} = req.body

    const newReview = new ModReview({
        module: module,
        grade: grade,
        yearTaken: yearTaken,
        description: description,
        review: review,
        user: _id
    });
    newReview.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}