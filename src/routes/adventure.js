const Adventure = require('../function/adventure')
const User = require('../function/user');
const Bag = require('../function/bag');
const { header, body, query } = require('express-validator')

module.exports = (app, validate) => {
    app.get('/region', (req, res) => {
        Adventure.getMap(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ err }))
    })

    app.get('/encounter', validate([
        header('Authorization').exists().custom(async auth => {
            return User.checkAuth(auth)
        }),
        query('region').exists().custom(async region => {
            return Adventure.getMap({ region }).then(data => {
                if (data.length === 0)
                    return Promise.reject();
            })
        })
    ]), (req, res) => {
        Adventure.encounter(req.query)
            .then(msg => res.json({ msg }))
            .catch(err => res.status(500).json({ err }))
    })

    app.get('/gym/encounter', validate([

    ]), (req, res) => {
        Adventure.encounterGym(req.query.type)
            .then(msg => res.json({ msg }))
            .catch(err => res.status(500).json({ err }))
    })
}