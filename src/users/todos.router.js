const router = require('express').Router()
const httpToDos = require('./todos.http')

router.route('/')
  .get(httpToDos.allToDos)
  .post(httpToDos.createNewToDo)

router.route('/:id')
  .get(httpToDos.getToDoId)
  .put(httpToDos.update)
  .delete(httpToDos.deleteToDoById)

module.exports = {
  router
}