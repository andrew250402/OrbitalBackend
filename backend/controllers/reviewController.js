const ModReview = require('../models/modReview');
const mongoose = require('mongoose')

module.exports.getUserReviews = async (req, res) => {
    const user_id = req.user._id

    const reviews = await ModReview.find({ user: user_id}).sort({createdAt: -1})

    res.status(200).json(reviews)
};

module.exports.getOtherReviews = async (req, res) => {
    const user_id = req.params._id

    const reviews = await ModReview.find({ user: user_id}).sort({createdAt: -1})

    res.status(200).json(reviews)
};

module.exports.deleteReview = async (req, res) => {
    const review_id = req.params.review_id;
  
    try {
      const delReview = await ModReview.findOneAndDelete({ _id: review_id });
  
      if (delReview.deletedCount === 0) {
        return res.status(404).json({ error: "Review not found" });
      }
  
      res.status(200).json(delReview);
    } catch (error) {
      console.error("Error occurred while deleting review:", error);
      res.status(500).json({ error: "An error occurred while deleting the review" });
    }
  };
  
  module.exports.editReview = async (req, res) => {
    const review_id = req.params.review_id;
    const { module, grade, yearTaken, description, review } = req.body;
  
    try {
      // Find the review in the database
      const updatedReview = await ModReview.findById(review_id);
  
      // Check if the review exists
      if (!updatedReview) {
        return res.status(404).json({ error: "Review not found" });
      }
  
      // Update the review data based on the request body
      updatedReview.module = module;
      updatedReview.grade = grade;
      updatedReview.yearTaken = yearTaken;
      updatedReview.description = description;
      updatedReview.review = review;
  
      // Save the updated review
      await updatedReview.save();
  
      res.status(200).json(updatedReview);
    } catch (error) {
      console.error("Error occurred while updating review:", error);
      res.status(500).json({ error: "An error occurred while updating the review" });
    }
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