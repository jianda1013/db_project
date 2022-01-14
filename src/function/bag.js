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
            mysql('user_pokemon').select('user_pokemon.id as user_pokemon_id', 'user_pokemon.pokemon', 'catched_at', 'type1', 'type2')
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
    }
}