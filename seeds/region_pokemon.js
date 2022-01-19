const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon']).then(() => {
        return knex("region_pokemon").insert([
            { region: "volcano", type: "Rock" },
            { region: "volcano", type: "Fire" },
            { region: "volcano", type: "Poison" },
            { region: "ocean", type: "Water" },
            { region: "ocean", type: "Normal" },
            { region: "ocean", type: "Fairy" },
            { region: "grassland", type: "Bug" },
            { region: "grassland", type: "Grass" },
            { region: "grassland", type: "Ground" },
            { region: "sky", type: "Dragon" },
            { region: "sky", type: "Flying" },
            { region: "sky", type: "Electric" },
            { region: "iceland", type: "Ice" },
            { region: "iceland", type: "Fighting" },
            { region: "iceland", type: "Steel" },
            { region: "grave", type: "Dark" },
            { region: "grave", type: "Ghost" },
            { region: "grave", type: "Psychic" }
        ])
    })
};