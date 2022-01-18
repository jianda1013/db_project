const mysql = require('../db');
let self = module.exports = {
    getMap({ region }) {
        return new Promise((resolve, reject) => {
            mysql('region').where(region ? { region } : {})
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    },

    encounter({ region }) {
        return new Promise((resolve, reject) => {
            Promise.all([
                mysql('region_pokemon').select('pokemon.id', 'name', 'evolve')
                    .join('pokemon', 'pokemon.type1', 'type')
                    .where({ region, legendary: 0, initial: 0 }),
                mysql('region_pokemon').select('pokemon.id', 'name', 'evolve')
                    .join('pokemon', 'pokemon.type2', 'type')
                    .where({ region, legendary: 0, initial: 0 })
            ]).then(datas => {
                let data = [...datas[0], ...datas[1]]
                data.sort((a, b) => a.id - b.id)
                self.getEncounter(data)
                    .then(pokemon => resolve(pokemon))
                    .catch(err => reject(err));;
            }).catch(err => reject(err));
        })
    },

    getEncounter(pokemon) {
        return new Promise(resolve => {
            let rand = [];
            pokemon.forEach((item, index) => {
                for (let i = 2; i >= item.evolve; i--)
                    rand.push(index);
            })
            resolve(pokemon[rand[Math.floor(Math.random() * rand.length)]]);
        })
    },

    encounterGym(type) {
        return new Promise((resolve, reject) => {
            mysql('pokemon').where('evolve', '>', 0).andWhere(builder => {
                builder.where('type1', type)
                    .orWhere('type2', type)
            }).then(data => resolve(data[Math.floor(Math.random() * data.length)])).catch(err => reject(err));
        })
    }
}