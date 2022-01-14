
exports.up = function (knex) {
    return knex.schema.hasTable('shop').then(exist => {
        if (!exist) {
            return knex.schema.createTable('shop', table => {
                table.increments('id');
                table.string('region', 255).references('region').inTable('region');
                table.string('pokemon', 255).references('name').inTable('pokemon');
                table.integer('money')
            });
        }
    });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('shop')
};
