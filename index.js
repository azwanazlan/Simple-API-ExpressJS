const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.listen( PORT , () => console.log(`SERVER IS UP AND RUNNING AT PORT: ${PORT}`))