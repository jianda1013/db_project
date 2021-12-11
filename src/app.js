const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT_REST, () => {
    console.log(`DB 2021`)
});

const db = require('./db');
db.migrate.latest();

require('./routes')(app);