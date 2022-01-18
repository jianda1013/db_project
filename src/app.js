const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT_REST, () => {
    console.log(`DB 2021`)
});
app.use(express.static(__dirname + '/../dist'));

const db = require('./db');
db.migrate.latest().then(() => {
    // const runSeed = require('../externalFunc/runSeeds')
    // // if (process.env.RESET)
    // runSeed(db, ['type.js', 'region.js']).then(() => {
    //     runSeed(db, ['pokemon.js', 'region_pokemon.js']).then(() => {
    //         console.log('done')
    //     })
    // })
})

require('./routes')(app);
require('./swagger')(app);