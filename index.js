const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send(`This is the root Route`)
})





app.get('*', (req, res) => {
    res.send(`This route does not exist`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`this app is on port ${PORT}`))