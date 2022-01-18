const Adventure = require('../function/adventure')
const User = require('../function/user');
const Pokemon = require('../function/pokemon');
const Bag = require('../function/bag');
const { header, body, query } = require('express-validator')

module.exports = (app, validate) => {

    app.get('/bag/size', validate([
        header('Authorization').exists().custom(async (auth, { req }) => {
            return User.checkAuth(auth).then(async user => {
                req.body.user = user.username;
            })
        })
    ]), (req, res) => {
        Bag.getBag(req.body.user)
            .then(msg => res.json({ msg }))
            .catch(err => res.status(500).json({ err }))
    })

    app.put('/buy/bag', validate([
        header('Authorization').exists().custom(async (auth, { req }) => {
            return User.checkAuth(auth).then(async user => {
                return Bag.checkMoney(user.username).then(() => {
                    req.body.user = user.username;
                })
            })
        })
    ]), (req, res) => {
        Bag.addBag(req.body.user)
            .then(msg => res.json({ msg }))
            .catch(err => res.status(500).json({ err }))
    })

    app.post('/buy/pokemon', validate([
        header('Authorization').exists().custom(async (auth, { req }) => {
            return User.checkAuth(auth).then(async user => {
                return Bag.checkMoney(user.username, 87).then(() => {
                    return Pokemon.checkLimit(user.username).then(() => {
                        req.body.user = user.username;
                    })
                })
            })
        }),
        body('pokemon').exists().custom(async name => {
            return Pokemon.list({ name, legendary: 1 }).then(data => {
                if (data.length === 0)
                    return Promise.reject();
            })
        })
    ]), (req, res) => {
        Bag.buyLengend(req.body)
            .then(msg => res.json({ msg }))
            .catch(err => res.status(500).json({ err }))
    })
}