const mysql = require('../db');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const self = module.exports = {

    checkAuth(auth) {
        return new Promise((resolve, reject) => {
            jwt.verify(auth, process.env.SECRET, (err, result) => {
                if (err)
                    reject('AUTHORIZE_FAILED')
                else
                    mysql('user').first().where({ username: result.username }).then(user => {
                        if (!user)
                            reject('AUTHORIZE_FAILED')
                        else
                            resolve(result)
                    })
            })
        })
    },

    checkUsername({ username }) {
        return new Promise((resolve, reject) => {
            mysql('user').first().where({ username })
                .then(user => resolve(user))
                .catch(err => reject(err))
        })
    },

    checkPassword({ username, password }) {
        return new Promise((resolve, reject) => {
            self.checkUsername({ username }).then(user => {
                if (user === undefined)
                    reject('LOGIN_FAILED')
                else
                    bycrypt.compare(password, user.password).then(result => {
                        if (result === false)
                            reject('LOGIN_FAILED')
                        else
                            resolve(true);
                    }).catch(err => reject(err))
            })
        })
    },

    login({ username }) {
        return new Promise((resolve, reject) => {
            jwt.sign({ username }, process.env.SECRET || 'SECRET', { expiresIn: '1h' }, (err, token) => {
                if (err)
                    reject(err)
                else
                    resolve(token)
            })
        })
    },

    regist({ username, password, sex }) {
        return new Promise((resolve, reject) => {
            bycrypt.hash(password, 10).then(h_password => {
                mysql('user').insert({ username, password: h_password, sex })
                    .then(() => resolve('USER_CREATE'))
                    .catch(err => reject(err))
            }).catch(err => console.log(err))
        })
    },

    getUserMoney({ username }) {
        return new Promise((resolve, reject) => {
            mysql('user').first('money').where({ username })
                .then(user => resolve(user.money))
                .catch(err => reject(err))
        })
    }
}