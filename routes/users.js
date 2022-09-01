import  express  from 'express'

const router = express.Router()

const users = [
    {
        "firstName":"John",
        "lastName": "Doe",
        "age": 29
    }
]

//all routes in here are starting with /users 
router.get('/', (req,res) => {
    res.send(users)
    console.log(users)
})

export default router