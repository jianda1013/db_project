const mysql = require('../db');
let self = module.exports = {

    getBag(username) {
        return new Promise((resolve, reject) => {
            mysql('user').first('bag_limit').where({ username })
                .then(data => resolve(data.bag_limit))
                .catch(err => reject(err));
        })
    },

    catch({ pokemon, user }) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').insert({ pokemon, user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    addBag(user) {
        return new Promise((resolve, reject) => {
            mysql.raw(`UPDATE user SET money = money - 5, bag_limit = bag_limit + 1 WHERE username = \'${user}\'`)
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    checkMoney(user, check = 5) {
        return new Promise((resolve, reject) => {
            mysql('user').first('money').where({ username: user }).then(data => {
                if (data.money < check)
                    reject('NO_MONEY');
                else resolve(true);
            }).catch(err => reject(err));
        })
    },

    getUserBag(user) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').select('user_pokemon.id as user_pokemon_id', 'user_pokemon.pokemon', 'type1', 'type2')
                .join('pokemon', 'pokemon.name', 'user_pokemon.pokemon').where({ user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    checkUserBag({ id, user }) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').where({ id, user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    abandon({ id, user }) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').del().where({ id, user })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    buyLengend({ pokemon, user }) {
        return new Promise((resolve, reject) => {
            mysql.raw(`UPDATE user SET money = money - 87 WHERE username = \'${user}\'`).then(() => {
                self.catch({ pokemon, user })
                    .then(data => resolve(data))
                    .catch(err => reject(err));
            })
        })
    }
}