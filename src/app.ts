import express from 'express'
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT_REST, () => {
    console.log(`DB 2021`)
});

import routes from './routes'
routes(app);