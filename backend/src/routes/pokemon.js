const Pokemon = require('../function/pokemon')
const { body } = require('express-validator')

module.exports = (app, validate) => {
    app.get('/pokemon', (req, res) => {
        Pokemon.list(req.query)
            .then(msg => res.json(msg))
            .catch(err => res.status(500).json({ err }))
    })

    app.post('/login', validate([
        body('username').exists(),
        body('password').exists().if(body('username').exists()).custom((password, { req: { body } }) => {
            return User.checkPassword(body)
        })
    ]), (req, res) => {
        User.login(req.body)
            .then(msg => res.json(msg))
            .catch(err => res.status(500).json({ err }))
    })
}