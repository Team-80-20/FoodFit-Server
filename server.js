const express = require('express')
const superAgent = require('superagent')
const pg = require('pg')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

const __API_URL__ = ''

//56091429890ff1ac97ff6d90ffe5e9ba

app.get("/test", (req, res) =>{
    // res.send('success')
    superAgent.get("https://api.edamam.com/search")
    .set("API-Key", "56091429890ff1ac97ff6d90ffe5e9ba")
    .set("Accept", "application/json")
    .then(function (result) {
     console.log(result.status, result.headers, result.body)
    })
    .catch(result => console.log(result.status, result.headers, result.body))
})

// .then(results => res.send(results))
// .catch(err => console.log(err))
// .header("X-Mashape-Key", "UvyZ00ZugXmshgLKuM22SutkJDifp1kDCdGjsnymdPWbpJUQX1")
// .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))