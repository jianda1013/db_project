const Pokemon = require('../function/pokemon')
const User = require('../function/user');
const Bag = require('../function/bag');
const { header, body, query } = require('express-validator')

module.exports = (app, validate) => {
    app.get('/pokemon', (req, res) => {
        Pokemon.list(req.query)
            .then(msg => res.json(msg))
            .catch(err => res.status(500).json({ err }))
    })

    app.post('/initial', validate([
        header('Authorization').exists().custom(async (auth, { req }) => {
            return User.checkAuth(auth).then(user => {
                req.body.user = user.username;
            })
        }),
        body('pokemon').exists().custom(async pokemon => {
            return Pokemon.list({ name: pokemon }).then(data => {
                if (data.length !== 1 || ![1, 4, 7].includes(data[0].id))
                    return Promise.reject('BAD_POKEMON')
            })
        })
    ]), (req, res) => {
        Pokemon.getInit(req.body)
            .then(msg => res.json(msg))
            .catch(err => res.status(500).json({ err }))
    })

    app.get('/user/pokemon', validate([
        header('Authorization').exists().custom(async (auth, { req }) => {
            return User.checkAuth(auth).then(user => {
                req.body.user = user.username;
            })
        }),
    ]), (req, res) => {
        Bag.getUserBag(req.body.user)
            .then(msg => res.json(msg))
            .catch(err => res.status(500).json({ err }))
    })

    app.delete('/user/pokemon', validate([
        header('Authorization').exists().custom(async (auth, { req }) => {
            return User.checkAuth(auth).then(user => {
                req.query.user = user.username;
            })
        }),
        query('id').exists().custom(async (id, { req }) => {
            return Bag.checkUserBag(req.query).then(data => {
                if (data.length === 0)
                    return Promise.reject();
            })
        })
    ]), (req, res) => {
        Bag.abandon(req.query)
            .then(msg => res.json(msg))
            .catch(err => res.status(500).json({ err }))
    })
}