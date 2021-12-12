const mysql = require('../../db');
const RandExp = require('randexp');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const idRex = /[1-9][0-9]{8}/;

const self = module.exports = {

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
            jwt.sign({ username }, process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err)
                    reject(err)
                else
                    resolve(token)
            })
        })
    },

    regist({ username, password, sex }) {
        return new Promise((resolve, reject) => {
            Promise.all([
                bycrypt.hash(password, 10),
                self.getId()
            ]).then(value => {
                const h_password = value[0], id = value[1];
                mysql('user').insert({ id, username, password: h_password, sex })
                    .then(() => resolve('USER_CREATE'))
                    .catch(err => reject(err))
            }).catch(err => console.log(err))
        })
    },

    getId() {
        return new Promise(async (resolve, reject) => {
            while (true) {
                let id = new RandExp(idRex).gen();
                let exist;
                try {
                    exist = await mysql('user').first().where({ id })
                } catch (err) {
                    reject(err)
                }
                if (exist === undefined) {
                    resolve(id)
                    break;
                }
            }
        })
    }
}