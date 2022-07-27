const { getAllToDos, getToDoById, createToDo, deleteToDo, updateToDo } = require('./todos.controllers.js')

const allToDos = (req, res) => {
  const data = getAllToDos();
  res.status(200).json({
    items: data.length,
    response: {
      data
    }
  })
}

const getToDoId = (req, res) => {
  const id = Number(req.params.id);

  if(id) {
    const data = getToDoById(id);
    if(data.name){
      res.status(200).json(data);
    } else {
      res.status(400).json({message: 'Invalid ID'});
    }
  } else {
    res.status(400).json({message: 'Id is not a number'});
  }
}

const createNewToDo = (req, res) => {
  const data = req.body;
  if(data.name && data.category && data.dateInit && data.dateEnd){
    const response = createToDo(data);
    res.status(201).json(response);
  } else {
    res.status(400).json({message: 'Invalid Arguments'});
  }
}

const update = (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  if(data.name && data.category && data.dateInit && data.dateEnd){
    const response = updateToDo(id, data);
    res.status(201).json(response);
  } else {
    res.status(400).json({message: 'Invalid Arguments'});
  }
}

const deleteToDoById = (req, res) => {
  const id = Number(req.params.id);

  if(typeof id === 'number') {
    const del = deleteToDo(id)
    if(del){
      res.status(204).json()
    } else {
      res.status(400).json({message: 'Try with another ID'})
    }
  } else {
    res.status(400).json({message: 'Invalid ID'})
  }
}

module.exports = {
  allToDos,
  getToDoId,
  createNewToDo,
  update,
  deleteToDoById
}