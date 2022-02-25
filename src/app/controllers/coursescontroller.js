const Login = require('../models/login')
const {MutipleMongooseToObject} = require('../../until/mogoosedb')
class coursesController {
    // [GET]/home

    show(req, res, next) {
        Login.findOne({slug: req.params.slug})
            .then(logins => {
                res.json(logins)
            })
            .catch(next)
    }

    create(req, res, next) {
        res.render('create')
    }

    store(req, res, next) {
        const login = new Login(req.body)
        login.save()
        // // //     .then(()=>{res.redirect('/')})
        // // //     .cacth(error => {
        // // //     })
        // res.json(req.body)
        res.send('/')
    }
}

module.exports = new coursesController