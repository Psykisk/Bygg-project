const User = require('../models/User')

module.exports = {
    async authenticate(req, res) {
        const token = await User.authenticate(req.body.email, req.body.password)
        res.json(token)
    }
}