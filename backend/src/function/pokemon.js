const mysql = require('../db');
const init = [1, 4, 7];
let self = module.exports = {

    list({ id, name, legendary, type }) {
        return new Promise((resolve, reject) => {
            mysql('pokemon').where(builder => {
                builder.where(id ? { id } : {})
                builder.where(name ? { name } : {})
                builder.where(legendary ? { legendary } : {})
                if (type)
                    builder.where('type1', type).orWhere('type2', type)
            }).then(data => resolve(data)).catch(err => reject(err));
        })
    },

    initial() {
        return new Promise((resolve, reject) => {
            mysql('pokemon').first('name').where({ id: init[Math.floor(Math.random() * 3)] })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    checkLimit(user) {
        return new Promise((resolve, reject) => {
            Promise.all([
                mysql('user').first('bag_limit').where({ username: user }),
                mysql('user_pokemon').count('id as id').where({ user })
            ]).then(result => {
                if (result[0] > result[1])
                    resolve(true)
                else reject("BAG_IS_FULLED");
            }).catch(err => reject(err));
        })
    },

    getInit(user) {
        return new Promise((resolve, reject) => {
            self.initial().then(pokemon => {
                mysql('user_pokemon').insert({ user, pokemon: pokemon.name, user, catched_at: 'Pallet Town' })
                    .then(data => resolve(data))
                    .catch(err => reject(err));
            })
        })
    },

    getPokemon({ pokemon, region = null }, user) {
        return new Promise((resolve, reject) => {
            Promise.all([
                mysql.raw(`UPDATE USER SET money = money + ${Math.floor(Math.random() * 10)}`),
                mysql('user_pokemon').insert({ user, pokemon, region })
            ]).then(data => resolve(data)).catch(err => reject(err));
        })
    }

}