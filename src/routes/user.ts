import express from 'express'
import UserFunc from '../function/user'

const User = (app: express.Application) => {
    app.get('/t', (req: express.Request, res: express.Response) => {
        UserFunc('test', 'test')
    })
}

export default User;