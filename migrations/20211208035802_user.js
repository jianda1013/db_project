
exports.up = function (knex) {
    return knex.schema.hasTable('user').then(exist => {
        if (!exist) {
            return knex.schema.createTable('user', table => {
                table.string('username', 255).primary();
                table.string('password', 255);
                table.integer('bag_limit').defaultTo(6);
                table.integer('money').defaultTo(0);
                table.string('sex', 10);
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user')
};
