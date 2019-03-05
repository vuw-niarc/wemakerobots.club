const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors({ origin: '*' }))

app.post('/register', bodyParser.text(), (req, res) => {
  console.log(req.body)
  res.sendStatus(201)
})

app.listen(80)
