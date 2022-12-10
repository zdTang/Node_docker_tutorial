const express=require('express')
const router=new express.Router()


const TodoGetController=require('../controllers/TodoGet.controller')
const TodoPutController=require('../controllers/TodoPut.controller')
const TodoPostController=require('../controllers/TodoPost.controller')


router.get('/todos', TodoGetController)

router.put('/todos/:id/complete', TodoPutController )

router.post('/todo', TodoPostController)