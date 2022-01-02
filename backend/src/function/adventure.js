const mysql = require('../db');
let self = module.exports = {
    getMap({ region }) {
        return new Promise((resolve, reject) => {
            mysql('region').where(region ? { region } : {})
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    getGym({ region }) {
        return new Promise((resolve, reject) => {
            mysql('gym').where({ region })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    getShop({ region }) {
        return new Promise((resolve, reject) => {
            mysql('shop').where({ region })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
}