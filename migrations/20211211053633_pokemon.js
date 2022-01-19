
exports.up = function (knex) {
    return knex.schema.hasTable('pokemon').then(exist => {
        if (!exist) {
            return knex.schema.createTable('pokemon', table => {
                table.integer('id').primary();
                table.string('name', 255).unique();
                table.boolean('legendary').defaultTo(true);
                table.boolean('initial').defaultTo(false);
                table.string('type1', 255).references('type').inTable('type');
                table.string('type2', 255).references('type').inTable('type');
                table.integer('evolve').defaultTo(0);
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pokemon')
};
