const User = require('../models/user')
const ModReview = require('../models/modReview')
const mongoose = require('mongoose')

module.exports.getInfo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such info"})
    }

    const info = await User.findById(id)

    if (!info) {
        return res.status(404).json({error: 'No such info'})
    }

    res.status(200).json(info)
};

module.exports.getSearchInfo = async (req, res) => {
    const { search } = req.body

    try {
        const info = await ModReview.findUser(search)
        res.status(200).json(info)

    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

