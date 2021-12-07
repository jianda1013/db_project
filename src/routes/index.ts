import express from 'express'

const routes = (app: express.Application) => {

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send('weather go application')
    })

    app.get('/health', (req: express.Request, res: express.Response) => {
        console.log({ headers: req.headers, body: req.body, query: req.query })
        res.send('app running healthy')
    })

}
export default routes;