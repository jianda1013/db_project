import express from 'express'

const User = (app: express.Application) => {
    app.post('/login')
}

export default User;