const express = require('express')
const app = express()

const HelloWorldController=require('./controllers/Helloworld.controller')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.get('/', HelloWorldController)

app.listen(3000, () => {
    console.log('Application running on http://localhost:3000')
})