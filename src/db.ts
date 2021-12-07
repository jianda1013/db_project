import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
})

export { sequelize }