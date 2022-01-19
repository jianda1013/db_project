
exports.up = function (knex) {
    return knex.schema.hasTable('region').then(exist => {
        if (!exist) {
            return knex.schema.createTable('region', table => {
                table.string('region', 255).primary();
                table.string('name', 255);
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('region')
};
