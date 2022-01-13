const validate = require('../validate');
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('2021 nccu database api')
    })

    app.post('/health', (req, res) => {
        console.log({ headers: req.headers, body: req.body, query: req.query })
        res.send('app running healthy')
    })

    require('./user')(app, validate)
    require('./pokemon')(app, validate)
}