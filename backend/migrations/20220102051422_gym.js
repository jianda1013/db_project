
exports.up = function (knex) {
    return knex.schema.hasTable('gym').then(exist => {
        if (!exist) {
            return knex.schema.createTable('gym', table => {
                table.increments('id');
                table.string('region', 255).references('region').inTable('region');
                table.string('pokemon', 255).references('name').inTable('pokemon');
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pokemon')
};
