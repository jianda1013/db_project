
exports.up = function (knex) {
    return knex.schema.hasTable('user').then(exist => {
        if (!exist) {
            return knex.schema.createTable('user', table => {
                table.integer('id').primary();
                table.string('username', 255);
                table.string('password', 255);
                table.string('sex', 10);
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user')
};
