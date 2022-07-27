const express = require('express');
const toDoRouter = require('./users/todos.router').router

const app = express();

app.use(express.json());

app.use('/api/v1/todos', toDoRouter)


app.listen(8000, () => {
  console.log('Server started at port 8000');
})