

class newController {
    show(req, res) {
        res.send("Hehehe")
    }


    // [GET]/news
    index(req, res) {
        res.render('news')
    }

    login(req, res, next) {
        res.render('login')
    }
    
}

module.exports = new newController