const express = require('express')
const TaskController = require('../controllers/controlerTaks')

const api = express.Router()

api.post('/newtask', TaskController.createTask)
api.get('/task', TaskController.getTask)
api.get('/taskName', TaskController.getTaskByName)
api.put('/updateTask', TaskController.updateTaskTime)
api.delete('/deleteTask', TaskController.deleteTask)

module.exports = api
