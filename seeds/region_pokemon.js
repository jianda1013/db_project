const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon']).then(() => {
        return knex("region_pokemon").insert([
            { region: "Route 1", pokemon: "Pidgey", rate: "50", way: "grass" },
            { region: "Route 1", pokemon: "Rattata", rate: "50", way: "grass" },
            { region: "Route 2", pokemon: "Pidgey", rate: "45", way: "grass" },
            { region: "Route 2", pokemon: "Rattata", rate: "45", way: "grass" },
            { region: "Route 2", pokemon: "Caterpie", rate: "5", way: "grass" },
            { region: "Route 2", pokemon: "Weedle", rate: "5", way: "grass" },
            
        ])
    })
};