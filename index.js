const express = require('express')
const app = express()
app.use(express.static("public"));

const logger = require('morgan')
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.render('landing.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})





app.get('*', (req, res) => {
    res.send(`This route does not exist`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`this app is on port ${PORT}`))