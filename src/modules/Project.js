import Task from './Task'

class Project{
    constructor(name){
      this.name = name
      this.todoList = []
    }

    addTask(task_name){
        let newTask = new Task(task_name)
        this.todoList.push(newTask)
        return newTask
    }
}

export default Project