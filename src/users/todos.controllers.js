const toDosDB = []

/*
  {
    id: 1,
    name: '',
    category: '',
    dateInit: '',
    dateEnd: ''
  }
*/

const getAllToDos = () => {
  return toDosDB
}

const getToDoById = (id) => {
  const filteredDB = toDosDB.filter(toDo => toDo.id === id);
  return filteredDB[0];
}

const createToDo = (todo) => {
  if(toDosDB.length === 0){
    const newToDo = {
      id: 1,
      name: todo.name,
      category: todo.category,
      dateInit: todo.dateInit,
      dateEnd: todo.dateEnd
    }
    toDosDB.push(newToDo)
    return newToDo;
  }
  const newToDo = {
    id: toDosDB[toDosDB.length - 1].id + 1,
    name: todo.name,
    category: todo.category,
    dateInit: todo.dateInit,
    dateEnd: todo.dateEnd
  }
  toDosDB.push(newToDo);
  return newToDo;
}

const updateToDo = (id, dataObj) => {
  const index = toDosDB.findIndex(item => item.id === id)
  if(index !== -1){
    toDosDB[index] = {
      id:id,
      ...dataObj
    };
    return toDosDB[index];
  }
  createToDo(dataObj)
  return toDosDB.at(-1)
}

const deleteToDo = (id) => {
  const index = toDosDB.findIndex(item => item.id === id)
  if (index !== -1){
    toDosDB.splice(index, 1)
    return true
  }
  return false
}

module.exports = {
  getAllToDos,
  getToDoById,
  createToDo,
  updateToDo,
  deleteToDo
}