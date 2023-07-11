const User = require('../models/user');

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body
    
    try {
        const user = await User.login(email, password)

        const token = user._id

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}