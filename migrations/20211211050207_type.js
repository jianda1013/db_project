
exports.up = function (knex) {
    return knex.schema.hasTable('type').then(exist => {
        if (!exist) {
            return knex.schema.createTable('type', table => {
                table.string('type', 255).primary();
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('type')
};
