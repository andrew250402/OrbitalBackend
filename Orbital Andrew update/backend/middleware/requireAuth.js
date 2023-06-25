const User = require("../models/user")

const requireAuth = async (req, res, next) => {

    // verify authentication
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authoriszation token required'})
    }

    const token = authorization.split(' ')[1]

    try {

        req.user = await User.findOne({ _id: token})
        next()

    } catch (error) {

        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = requireAuth;