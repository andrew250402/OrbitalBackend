const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

//Make Schema, defining structure
const modReviewSchema = new Schema({
    module:{
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    yearTaken: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {timestamps: true});

modReviewSchema.statics.findUser = async function (search) {
    const review = await this.find({module: search});
    
    if (!review.length) {
      throw new Error("No Match Found");
    }
  
    const users = [];
    for (const reviewItem of review) {
      const user = await User.findOne({_id: reviewItem.user});
      users.push(user);
    }
    console.log(users)
    return users;
};

//Create model based on the Schema and define name
const ModReview = mongoose.model('ModReview', modReviewSchema);

//Export
module.exports = ModReview;