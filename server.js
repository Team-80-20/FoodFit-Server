const express = require('express')
const superAgent = require('superagent')
const pg = require('pg')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

app.get("/search", (req, res) =>{
    const food = req.query.food
    const minCal = req.query.minCal
    const maxCal = req.query.maxCal
    const healthLabel = req.query.healthLabel
    const url = `https://api.edamam.com/search?q=${food}&app_id=20bfab81&app_key=56091429890ff1ac97ff6d90ffe5e9ba&from=0&to=8&calories=gte%20${minCal},%20lte%20${maxCal}&health=alcohol-free${healthLabel}`
    superAgent.get(url)
    .then(function (result) {
        console.log(url)
        res.send(result.body)
    })
    .catch(result => console.error('error', result.status, result.headers, result.body))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))