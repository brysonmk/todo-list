import Storage from './Storage'

class UI {
    constructor(){
        this.storage = new Storage()
        this.sectionContent = this.storage.projectList[0]
        this.loadHomePage()
        this.createStartingEventListeners()
    }


    // load functions

    loadHomePage(){
        this.loadSections()
        this.loadSectionContent()
    }

    loadSections(){
        const sections = document.querySelector('.sections')
    }
    
    loadSectionContent(){
        const sectionContent = document.querySelector('.section-content')
        sectionContent.innerHTML = ``

        let projectList = document.createElement('div')
        projectList.classList.add('project')
        projectList.classList.add(this.sectionContent.name)
        projectList.innerHTML = `
                <h2 class="content-header">${this.sectionContent.name}</h2>
                <div class="task-list"></div>
                <button class="add-task-btn">Add Task</button>`

        sectionContent.append(projectList)

        const addTaskBtn = document.querySelector('.add-task-btn')
        addTaskBtn.addEventListener('click', this.openAddTaskSection.bind(this))

        const taskList = document.querySelector('.task-list')
        for (let i = 0; i < this.sectionContent.todoList.length; i++){
            let newTask = document.createElement('div')
            newTask.classList.add("taskItem")
            newTask.innerHTML = `<a>${this.sectionContent.todoList[i].name}</a>`
            taskList.appendChild(newTask)
        }
    }

    createStartingEventListeners(){
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.addEventListener('click', this.openAddProjectSection.bind(this))

        const inboxBtn = document.querySelector('.inbox-btn')
        inboxBtn.addEventListener('click', this.changeToProject.bind(this))
    }


    // Task functions

    closeAddTaskSection(){
        const addTaskSection = document.querySelector('.add-task-section')
        addTaskSection.remove()
        const addTasktBtn = document.querySelector('.add-task-btn')
        addTasktBtn.style.display = 'block'
    }

    addTask(){
        const taskInput = document.querySelector('#task-name-input')
        if (taskInput.value == ''){
            return
        }
        this.sectionContent.addTask(taskInput.value)
        this.closeAddTaskSection()
        this.loadSectionContent()
    }

    openAddTaskSection(){
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'none'

        const addTaskSection = document.createElement('div');
        addTaskSection.classList.add('add-task-section')
        addTaskSection.innerHTML = `
            <div class="task-input">
                <label for="task-name-input">Enter task name:</label>
                <input type="text" id="task-name-input" name="text-input">
            </div>
            <div class="task-btns">
                <button class="add-btn task">Add</button>
                <button class="cancel-btn task">Cancel</button>
            </div>`;
        const sectionContent = document.querySelector('.section-content')
        sectionContent.appendChild(addTaskSection)

        let addBtnTask = document.querySelector('.add-btn.task');
        let cancelBtnTask = document.querySelector('.cancel-btn.task');
        addBtnTask.addEventListener('click', this.addTask.bind(this))
        cancelBtnTask.addEventListener('click', this.closeAddTaskSection.bind(this))
    }


    // Project functions

    changeToProject(e){
        this.sectionContent = this.storage.getProject(e.srcElement.textContent)
        this.storage.selectedProject = this.sectionContent
        this.loadSectionContent()
    }

    closeAddProjectSection(){
        const sections = document.querySelector('.sections')
        sections.removeChild(document.querySelector('.add-project-section'));
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.style.display = 'block'
    }

    addProject(){
        const projectInput = document.querySelector('#project-name-input')
        if (projectInput.value == '' || this.storage.getProject(projectInput.value)){
            return
        }
        this.storage.addNewProject(projectInput.value)
        
        const newProject = document.createElement('button')
        newProject.classList.add('project-btn') 
        newProject.classList.add(projectInput.value)  
        newProject.innerHTML = projectInput.value

        const projectList = document.querySelector('.project-list')
        projectList.appendChild(newProject)
        newProject.addEventListener('click', this.changeToProject.bind(this))
        
        this.closeAddProjectSection() 
    }

    openAddProjectSection(){
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.style.display = 'none'

        const addProjectSection = document.createElement('div');
        addProjectSection.classList.add('add-project-section')
        addProjectSection.innerHTML = `
            <div class="project-input">
                <label for="project-name-input">Enter project name:</label>
                <input type="text" id="project-name-input" name="text-input">
            </div>
            <div class="project-btns">
                <button class="add-btn project">Add</button>
                <button class="cancel-btn project">Cancel</button>
            </div>`;
        const sections = document.querySelector('.sections')
        sections.appendChild(addProjectSection)

        let addBtnProject = document.querySelector('.add-btn.project');
        let cancelBtnProject = document.querySelector('.cancel-btn.project');
        addBtnProject.addEventListener('click', this.addProject.bind(this))
        cancelBtnProject.addEventListener('click', this.closeAddProjectSection.bind(this))
    }

}

export default UI