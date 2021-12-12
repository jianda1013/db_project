
exports.up = function (knex) {
    return knex.schema.hasTable('user_pokemon').then(exist => {
        if (!exist) {
            return knex.schema.createTable('user_pokemon', table => {
                table.increments('id');
                table.string('user', 255).references('username').inTable('user');
                table.string('pokemon', 255).references('name').inTable('pokemon');
                table.timestamp('catched_time').defaultTo(knex.fn.now());
                table.string('catched_at', 255).references('region').inTable('region');
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user_pokemon')
};
