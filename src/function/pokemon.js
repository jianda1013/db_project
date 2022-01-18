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
                console.log(result);
                if (result[0].bag_limit > result[1][0].id)
                    resolve(true)
                else reject("BAG_IS_FULLED");
            }).catch(err => reject(err));
        })
    },

    getInit({ pokemon, user }) {
        return new Promise((resolve, reject) => {
            mysql('user_pokemon').insert({ user, pokemon })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    newPokemon({ pokemon, user }) {
        return new Promise((resolve, reject) => {
            self.catchSuccess(pokemon).then(result => {
                if (result) {
                    let money = Math.floor(Math.random() * 10)
                    Promise.all([
                        mysql.raw(`UPDATE USER SET money = money + ${money}`),
                        mysql('user_pokemon').insert({ user, pokemon })
                    ]).then(() => resolve(money)).catch(err => reject(err));
                }
                else resolve('FAIL')
            }).catch(err => reject(err));
        })
    },

    catchSuccess(pokemon) {
        return new Promise((resolve, reject) => {
            mysql('pokemon').first('evolve').where({ name: pokemon }).then(data => {
                if (Math.floor(Math.random() * 10) < (3 - data.evolve) * 3)
                    resolve(true);
                else resolve(false)
            }).catch(err => reject(err));
        })
    }

}