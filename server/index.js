require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
app.use(express())
const { SERVER_PORT, CONNECTION_STRING } = process.env
const controller = require('./controller')

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db Set!')
    console.log(db.listTables())
})

app.get('/api/products', controller.read)
app.post('/api/products', controller.create)

app.listen(SERVER_PORT, () => console.log(`Your port is listening on ${SERVER_PORT}`))