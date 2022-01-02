const mysql = require('../db');
let self = module.exports = {


    catch({ pokemon }, user) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').insert({ pokemon, user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    getUserBag(user) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').where({ user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    abandon({ id }, user) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').del().where({ id, user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
}