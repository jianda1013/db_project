const User = require('../function/user')
const { body } = require('express-validator')

module.exports = (app, validate) => {
    /**
    * @swagger
    * /regist:
    *   post:
    *     tags:
    *       - User
    *     operationId: regist
    *     security:
    *       - ApiKeyAuth: []
    *     parameters:
    *     - name: username
    *       in: formData
    *     - name: password
    *       in: formData
    *     - name: sex
    *       in: formData
    *     responses:
    *       200:
    *         schema:
    *           $ref: '#/definitions/Regist'
    */
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
            .then(msg => res.json({ msg }))
            .catch(err => res.status(500).json({ err }))
    })

    /**
    * @swagger
    * /login:
    *   post:
    *     tags:
    *       - User
    *     operationId: login
    *     security:
    *       - ApiKeyAuth: []
    *     parameters:
    *     - name: username
    *       in: formData
    *     - name: password
    *       in: formData
    *     responses:
    *       200:
    *         schema:
    *           $ref: '#/definitions/Login'
    */

    app.post('/login', validate([
        body('username').exists(),
        body('password').exists().if(body('username').exists()).custom((password, { req: { body } }) => {
            return User.checkPassword(body)
        })
    ]), (req, res) => {
        User.login(req.body)
            .then(auth => res.json({ auth }))
            .catch(err => res.status(500).json({ err }))
    })
    /**
    * @swagger
    *  definitions:
    *    Regist:
    *      type: array
    *      items:
    *        type: object
    *        properties:
    *          customer_number:
    *            type: string
    *          customer_name:
    *            type: string
    *          area_name:
    *            type: string
    *          customer_abbreviation:
    *            type: string
    *    Login:
    *      type: array
    *      items:
    *        type: object
    *        properties:
    *          customer_number:
    *            type: string
    *          customer_name:
    *            type: string
    *          area_name:
    *            type: string
    *          customer_abbreviation:
    *            type: string
    */
}