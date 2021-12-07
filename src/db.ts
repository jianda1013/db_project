import knex from 'knex';

const mysql = knex({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        port: parseInt(process.env.MYSQL_PORT),
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        timezone: 'UTC+8'
    }
});

export { mysql }