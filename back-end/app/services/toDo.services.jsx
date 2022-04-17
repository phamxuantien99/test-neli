let toDoList = [
  {
    id: 1,
    description: "sleeping",
    isFinish: true,
  },
  {
    id: 2,
    description: "hello",
    isFinish: false,
  },
  {
    id: 3,
    description: "kitty",
    isFinish: true,
  },
];

const getList = () => {
  if (toDoList) {
    return toDoList;
  } else {
    return false;
  }
};

const getDetail = (id) => {
    const index = toDoList.findIndex((toDo) => toDo.id == id);
    if(index !== -1){
        const toDo = toDoList[index]
        return toDo
    }else{
        return false
    }
}

const create = (toDo) => {
    const newToDo = {
        id: Math.random(),
        ...toDo
    }
    toDoList = [...toDoList, toDo]
    return newToDo
}

const update = (id, toDo) => {
    const index = toDoList.findIndex(toDo => toDo.id == id)
    if(index !== -1){
        const toDoOld = toDoList[index]
        const toDoUpdated = {
            ...toDoOld,
            ...toDo
        }
        toDoList[index] = toDoUpdated
        return toDoUpdated
    }else{
        return false
    }
}

const deleteById = (id) => {
    const index = toDoList.findIndex(toDo => toDo.id == id)
    if(index !== -1) {
        const toDo = toDoList[index]
        toDoList.splice(index, 1)
        return toDo
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
