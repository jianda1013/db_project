import express from 'express'
import User from './user'

const routes = (app: express.Application) => {

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send('2021 nccu database api')
    })

    app.get('/health', (req: express.Request, res: express.Response) => {
        console.log({ headers: req.headers, body: req.body, query: req.query })
        res.send('app running healthy')
    })

    User(app)
}
export default routes;