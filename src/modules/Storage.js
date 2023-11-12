import Project from './Project'

class Storage {
    constructor(){
        this.projectList = []
        this.selectedProject = this.addNewProject('Inbox')
    }

    addNewProject(project_name){ 
        let newProject = new Project(project_name)
        this.projectList.push(newProject)
        return newProject
    }

    getProject(name){
        for(let i = 0; i < this.projectList.length; i++){
            if (name == this.projectList[i].name) return this.projectList[i]
        }
        return 
    }
}

export default Storage