
exports.up = function (knex) {
    return knex.schema.hasTable('region_pokemon').then(exist => {
        if (!exist) {
            return knex.schema.createTable('region_pokemon', table => {
                table.increments('id');
                table.string('region', 255).references('region').inTable('region');
                table.string('type', 255).references('type').inTable('type');
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('region_pokemon')
};
