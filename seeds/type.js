const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon', 'user_pokemon']).then(() => {
        return deleteTable(knex, ['pokemon', 'resistance']).then(() => {
            return deleteTable(knex, ['type']).then(() => {
                return knex("type").insert([
                    { type: "Normal" },
                    { type: "Fire" },
                    { type: "Water" },
                    { type: "Electric" },
                    { type: "Grass" },
                    { type: "Ice" },
                    { type: "Fighting" },
                    { type: "Poison" },
                    { type: "Ground" },
                    { type: "Flying" },
                    { type: "Psychic" },
                    { type: "Bug" },
                    { type: "Rock" },
                    { type: "Ghost" },
                    { type: "Dragon" },
                    { type: "Dark" },
                    { type: "Steel" },
                    { type: "Fairy" }
                ])
            })
        })
    })
};