const express = require('express')
const fs = require('fs')
const path = require('path')

const jsonPath = path.join(__dirname, 'counter.json')
const app = express()

const counter = fs.readFileSync(jsonPath, 'utf-8')
const counterParse = JSON.parse(counter)

app.get('/', (req, res) => {
    counterParse.main += 1
    const counterJSON = JSON.stringify(counterParse)
    fs.writeFileSync(jsonPath, counterJSON)
    res.send(`<h1>Welcome</h1><br><h4>You have visited this page ${counterParse.main}</h4><br><a href="/about">About</a>`)

})

app.get('/about', (req, res) => {
    counterParse.about += 1
    const counterJSON = JSON.stringify(counterParse)
    fs.writeFileSync(jsonPath, counterJSON)
    res.send(`<h1>About</h1><br><h4>You have visited this page ${counterParse.about}</h4><br><a href="/">Main</a>`)
})

app.listen(3000)