const {ToDo} = require("../model/index.jsx")

const getList = async () => {

  const toDoList = await ToDo.findAll()

  if (toDoList) {
    return toDoList;
  } else {
    return false;
  }
};

const getDetail = async (id) => {
    const toDo = await ToDo.findOne({
      where: {
        id
      }
    })
    if(toDo){
        return toDo
    }else{
        return false
    }
}

const create = async (toDo) => {
    const newToDo = await ToDo.create(toDo)
 
    return newToDo
}

const update = async (id, description, isFinish) => {
  const toDo = await ToDo.findOne({
    where: {
      id
    }
  })
  if(toDo){
    toDo.description = description;
    toDo.isFinish = isFinish
    const toDoUpdated = await toDo.save()
    return toDoUpdated
  }else{
    return null
  }
  
}

const deleteById = async (id) => {
    
  const toDoDelete = await getDetail(id)

    if(toDoDelete) {
       await ToDo.destroy({
          where: {
            id
          }
        })
        return toDoDelete
    }else{
        return false
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
}
