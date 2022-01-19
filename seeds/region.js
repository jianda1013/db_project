const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon', 'user_pokemon']).then(() => {
        return deleteTable(knex, ['region']).then(() => {
            return knex("region").insert([
                { region: "volcano", name: "火山" },
                { region: "ocean", name: "海洋" },
                { region: "grassland", name: "草原" },
                { region: "sky", name: "天空" },
                { region: "iceland", name: "冰山" },
                { region: "grave", name: "墓園" },
                { region: "gym", name: "道館" },
            ])
        })
    })
};