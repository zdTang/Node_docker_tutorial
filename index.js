const express = require('express')
const app = express()

const HelloWorldController=require('./controllers/Helloworld.controller')
const TodoGetController=require('./controllers/TodoGet.controller')
const TodoPutController=require('./controllers/TodoPut.controller')
const TodoPostController=require('./controllers/TodoPost.controller')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', HelloWorldController)

app.get('/todos', TodoGetController)

app.put('/todos/:id/complete', TodoPutController )

app.post('/todo', TodoPostController)

app.listen(3000, () => {
    console.log('Application running on http://localhost:3000')
})