
exports.up = function (knex) {
    return knex.schema.hasTable('region').then(exist => {
        if (!exist) {
            return knex.schema.createTable('region', table => {
                table.string('region', 255).primary();
                table.string('up', 255).references('region').inTable('region').onUpdate('CASCADE').onDelete('CASCADE');
                table.string('right', 255).references('region').inTable('region').onUpdate('CASCADE').onDelete('CASCADE');
                table.string('down', 255).references('region').inTable('region').onUpdate('CASCADE').onDelete('CASCADE');
                table.string('left', 255).references('region').inTable('region').onUpdate('CASCADE').onDelete('CASCADE');
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('region')
};
