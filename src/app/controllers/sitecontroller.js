const Login = require('../models/login')
const {MutipleMongooseToObject} = require('../../until/mogoosedb')
class siteController {
    // [GET]/home
    home(req, res, next) {
        Login.find({})
            .then(logins => {
                res.render('home', {
                    logins: MutipleMongooseToObject(logins)
                })
            })
            .catch(next)
        
    }

    show(req, res) {
        res.send("Hehehe")
    }
}

module.exports = new siteController