const express = require('express')
const superAgent = require('superagent')
const pg = require('pg')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

const __API_URL__ = ''

app.get("/search", express.json(), express.urlencoded({extended:true}), (req, res) =>{
    const food = req.query.food
    const minCal = req.query.minCal
    const maxCal = req.query.maxCal
    const healthLabel = req.query.healthLabel
    const url = `https://api.edamam.com/search?q=${food}&app_id=20bfab81&app_key=56091429890ff1ac97ff6d90ffe5e9ba&from=0&to=10&calories=gte%20${minCal},%20lte%20${maxCal}&health=${healthLabel}`
    console.log(url)
    res.send(url)
    superAgent.get(url)
    .then(function (result) {
     console.log(result.status, result.headers, result.body)
    })
    .catch(result => console.log(result.status, result.headers, result.body))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))