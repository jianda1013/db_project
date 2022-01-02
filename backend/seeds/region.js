const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon', 'user_pokemon']).then(() => {
        return deleteTable(knex, ['region']).then(() => {
            return knex("region").insert([
                { region: "Route 1" },
                { region: "Route 2" },
                { region: "Route 3" },
                { region: "Route 4" },
                { region: "Route 5" },
                { region: "Route 6" },
                { region: "Route 7" },
                { region: "Route 8" },
                { region: "Route 9" },
                { region: "Route 10" },
                { region: "Route 11" },
                { region: "Route 12" },
                { region: "Route 13" },
                { region: "Route 14" },
                { region: "Route 15" },
                { region: "Route 16" },
                { region: "Route 17" },
                { region: "Route 18" },
                { region: "Route 19" },
                { region: "Route 20" },
                { region: "Route 21" },
                { region: "Route 22" },
                { region: "Route 23" },
                { region: "Route 24" },
                { region: "Route 25" },

                { region: "Pallet Town" }, // 真新鎮
                { region: "Viridian City" }, // 常青市
                { region: "Pewter City" }, // 深灰市
                { region: "Cerulean City" }, // 華藍市
                { region: "Vermilion City" }, // 枯葉市
                { region: "Lavender Town" }, // 紫苑鎮
                { region: "Celadon City" }, // 玉虹市
                { region: "Saffron City" }, // 金黃市
                { region: "Fuchsia City" }, // 淺紅市
                { region: "Cinnabar Island" }, // 紅蓮鎮
                { region: "Indigo Plateau" } // 石英高原
            ]).then(async () => {
                await knex("region").update({ up: "Route 1", down: "Route 21" }).where({ region: "Pallet Town" })
                await knex("region").update({ up: "Route 2", down: "Route 1", left: "Route 22" }).where({ region: "Viridian City" })
                await knex("region").update({ right: "Route 3", down: "Route 2" }).where({ region: "Pewter City" })
                await knex("region").update({ right: "Route 9", left: "Route 4", up: "Route 24", down: "Route 5" }).where({ region: "Cerulean City" })
                await knex("region").update({ up: "Route 6", right: "Route 11" }).where({ region: "Vermilion City" })
                await knex("region").update({ left: "Route 8", up: "Route 10", down: "Route 12" }).where({ region: "Lavender Town" })
                await knex("region").update({ right: "Route 7", left: "Route 16" }).where({ region: "Celadon City" })
                await knex("region").update({ right: "Route 8", left: "Route 7", up: "Route 5", down: "Route 6" }).where({ region: "Saffron City" })
                await knex("region").update({ right: "Route 15", left: "Route 18", down: "Route 19" }).where({ region: "Fuchsia City" })
                await knex("region").update({ right: "Route 20", up: "Route 21" }).where({ region: "Cinnabar Island" })
                await knex("region").update({ down: "Route 23" }).where({ region: "Indigo Plateau" })

                await knex("region").update({ up: "Viridian City", down: "Pallet Town" }).where({ region: "Route 1" })
                await knex("region").update({ up: "Pewter City", down: "Viridian City" }).where({ region: "Route 2" })
                await knex("region").update({ right: "Route 4", left: "Pewter City" }).where({ region: "Route 3" })
                await knex("region").update({ right: "Cerulean City", left: "Route 3" }).where({ region: "Route 4" })
                await knex("region").update({ up: "Cerulean City", down: "Saffron City" }).where({ region: "Route 5" })
                await knex("region").update({ up: "Saffron City", down: "Vermilion City" }).where({ region: "Route 6" })
                await knex("region").update({ right: "Saffron City", left: "Celadon City" }).where({ region: "Route 7" })
                await knex("region").update({ right: "Lavender Town", left: "Saffron City" }).where({ region: "Route 8" })
                await knex("region").update({ left: "Cerulean City", down: "Route 10" }).where({ region: "Route 9" })
                await knex("region").update({ up: "Route 9", down: "Lavender Town" }).where({ region: "Route 10" })
                await knex("region").update({ right: "Route 12", left: "Vermilion City" }).where({ region: "Route 11" })
                await knex("region").update({ left: "Route 11", up: "Lavender Town", down: "Route 13" }).where({ region: "Route 12" })
                await knex("region").update({ up: "Route 12", down: "Route 14" }).where({ region: "Route 13" })
                await knex("region").update({ left: "Route 15", up: "Route 13" }).where({ region: "Route 14" })
                await knex("region").update({ right: "Route 14", left: "Fuchsia City" }).where({ region: "Route 15" })
                await knex("region").update({ right: "Celadon City", down: "Route 17" }).where({ region: "Route 16" })
                await knex("region").update({ up: "Route 16", down: "Route 18" }).where({ region: "Route 17" })
                await knex("region").update({ right: "Fuchsia City", up: "Route 17", }).where({ region: "Route 18" })
                await knex("region").update({ left: "Route 20", up: "Fuchsia City" }).where({ region: "Route 19" })
                await knex("region").update({ right: "Route 19", left: "Cinnabar Island" }).where({ region: "Route 20" })
                await knex("region").update({ up: "Pallet Town", down: "Cinnabar Island" }).where({ region: "Route 21" })
                await knex("region").update({ right: "Viridian City", up: "Route 23" }).where({ region: "Route 22" })
                await knex("region").update({ up: "Indigo Plateau", down: "Route 22" }).where({ region: "Route 23" })
                await knex("region").update({ up: "Route 25", down: "Cerulean City" }).where({ region: "Route 24" })
                await knex("region").update({ down: "Route 24" }).where({ region: "Route 25" })
            })
        })
    })
};