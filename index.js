import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/users',usersRoutes)

app.get('/', (req,res) => {
    console.log('Hello World from Homepage')
    res.send('Hello World.')
})

app.listen( PORT , () => console.log(`SERVER IS UP AND RUNNING AT PORT: http://localhost:${PORT}`))