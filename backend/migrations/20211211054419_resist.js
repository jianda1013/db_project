
exports.up = function (knex) {
    return knex.schema.hasTable('resistance').then(exist => {
        if (!exist) {
            return knex.schema.createTable('resistance', table => {
                table.string('type_A', 255).references('type').inTable('type');
                table.string('type_B', 255).references('type').inTable('type');
                table.double('rate');
                table.primary(['type_A', 'type_B'])
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('resistance')
};
