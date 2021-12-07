import express from 'express'

const routes = (app: express.Application) => {

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send('2021 nccu database api')
    })

    app.get('/health', (req: express.Request, res: express.Response) => {
        console.log({ headers: req.headers, body: req.body, query: req.query })
        res.send('app running healthy')
    })

}
export default routes;