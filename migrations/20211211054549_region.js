
exports.up = function (knex) {
    return knex.schema.hasTable('region').then(exist => {
        if (!exist) {
            return knex.schema.createTable('region', table => {
                table.string('region', 255).primary();
                table.string('up', 255).references('region').inTable('region');
                table.string('rignt', 255).references('region').inTable('region');
                table.string('down', 255).references('region').inTable('region');
                table.string('left', 255).references('region').inTable('region');
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('region')
};
