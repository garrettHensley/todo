const todoRoutes = require('./todos')

const appRouter = (app, fs) => {
    app.get('/', (req, rs) => {
        res.send('welcome to dev api server')
    })

    todoRoutes(app, fs)
}

module.exports = appRouter