const userRoutes = require('./users')

const appRouter = (app, fs) => {
    app.get('/', (req, rs) => {
        res.send('welcome to dev api server')
    })

    userRoutes(app, fs)
}

module.exports = appRouter