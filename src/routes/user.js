const User = require('../function/user')
const { body } = require('express-validator')

module.exports = (app, validate) => {
    app.post('/regist', validate([
        body('username').exists().bail().custom(username => {
            return User.checkUsername({ username }).then(data => {
                if (data !== undefined)
                    return Promise.reject()
            })
        }),
        body('password').exists().bail().custom(password => {
            return password.match(/[a-zA-Z0-9]{6,15}/)
        }),
        body('sex').exists().bail().custom(sex => {
            return ['M', 'F'].includes(sex)
        })
    ]), (req, res) => {
        User.regist(req.body)
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