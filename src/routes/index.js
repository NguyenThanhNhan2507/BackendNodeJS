const newRoter = require('./newroute')
const siteRouter = require('./site')
const courseRouter = require('./courses')

function route(app) {

    app.use('/news', newRoter)

    app.use('/home', siteRouter)

    app.use('/login', newRoter)

    app.use('/courses', courseRouter)

    
    app.get('/', (req, res) => {
        return res.send("hello");
    })


    // app.get('/login', (req, res)=>{
    //     res.render('login')
    // })
    
    app.post('/login', (req, res)=>{
        console.log(req.body)
        res.send('login')
    })
}
module.exports = route;