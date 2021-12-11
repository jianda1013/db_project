
exports.up = function (knex) {
    return knex.schema.hasTable('pokemon').then(exist => {
        if (!exist) {
            return knex.schema.createTable('pokemon', table => {
                table.integer('id').unsigned().notNullable();
                table.string('name', 255).primary();
                table.boolean('legendary').defaultTo(true);
                table.string('type', 255).references('type').inTable('type');
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pokemon')
};
