/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\nconst ui = new _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\nclass Project{\n    constructor(name){\n      this.name = name\n      this.todoList = []\n    }\n\n    addTask(task_name){\n        let newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task_name)\n        this.todoList.push(newTask)\n        return newTask\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\nclass Storage {\n    constructor(){\n        this.projectList = []\n        this.selectedProject = this.addNewProject('Inbox')\n    }\n\n    addNewProject(project_name){ \n        let newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](project_name)\n        this.projectList.push(newProject)\n        return newProject\n    }\n\n    getProject(name){\n        for(let i = 0; i < this.projectList.length; i++){\n            if (name == this.projectList[i].name) return this.projectList[i]\n        }\n        return \n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\n    constructor(name){\n        this.name = name\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n\n\nclass UI {\n    constructor(){\n        this.storage = new _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.sectionContent = this.storage.projectList[0]\n        this.loadHomePage()\n        this.createStartingEventListeners()\n    }\n\n\n    // load functions\n\n    loadHomePage(){\n        this.loadSections()\n        this.loadSectionContent()\n    }\n\n    loadSections(){\n        const sections = document.querySelector('.sections')\n    }\n    \n    loadSectionContent(){\n        const sectionContent = document.querySelector('.section-content')\n        sectionContent.innerHTML = ``\n\n        let projectList = document.createElement('div')\n        projectList.classList.add('project')\n        projectList.classList.add(this.sectionContent.name)\n        projectList.innerHTML = `\n                <h2 class=\"content-header\">${this.sectionContent.name}</h2>\n                <div class=\"task-list\"></div>\n                <button class=\"add-task-btn\">Add Task</button>`\n\n        sectionContent.append(projectList)\n\n        const addTaskBtn = document.querySelector('.add-task-btn')\n        addTaskBtn.addEventListener('click', this.openAddTaskSection.bind(this))\n\n        const taskList = document.querySelector('.task-list')\n        for (let i = 0; i < this.sectionContent.todoList.length; i++){\n            let newTask = document.createElement('div')\n            newTask.classList.add(\"taskItem\")\n            newTask.innerHTML = `<a>${this.sectionContent.todoList[i].name}</a>`\n            taskList.appendChild(newTask)\n        }\n    }\n\n    createStartingEventListeners(){\n        const addProjectBtn = document.querySelector('.add-project-btn');\n        addProjectBtn.addEventListener('click', this.openAddProjectSection.bind(this))\n\n        const inboxBtn = document.querySelector('.inbox-btn')\n        inboxBtn.addEventListener('click', this.changeToProject.bind(this))\n    }\n\n\n    // Task functions\n\n    closeAddTaskSection(){\n        const addTaskSection = document.querySelector('.add-task-section')\n        addTaskSection.remove()\n        const addTasktBtn = document.querySelector('.add-task-btn')\n        addTasktBtn.style.display = 'block'\n    }\n\n    addTask(){\n        const taskInput = document.querySelector('#task-name-input')\n        if (taskInput.value == ''){\n            return\n        }\n        this.sectionContent.addTask(taskInput.value)\n        this.closeAddTaskSection()\n        this.loadSectionContent()\n    }\n\n    openAddTaskSection(){\n        const addTaskBtn = document.querySelector('.add-task-btn');\n        addTaskBtn.style.display = 'none'\n\n        const addTaskSection = document.createElement('div');\n        addTaskSection.classList.add('add-task-section')\n        addTaskSection.innerHTML = `\n            <div class=\"task-input\">\n                <label for=\"task-name-input\">Enter task name:</label>\n                <input type=\"text\" id=\"task-name-input\" name=\"text-input\">\n            </div>\n            <div class=\"task-btns\">\n                <button class=\"add-btn task\">Add</button>\n                <button class=\"cancel-btn task\">Cancel</button>\n            </div>`;\n        const sectionContent = document.querySelector('.section-content')\n        sectionContent.appendChild(addTaskSection)\n\n        let addBtnTask = document.querySelector('.add-btn.task');\n        let cancelBtnTask = document.querySelector('.cancel-btn.task');\n        addBtnTask.addEventListener('click', this.addTask.bind(this))\n        cancelBtnTask.addEventListener('click', this.closeAddTaskSection.bind(this))\n    }\n\n\n    // Project functions\n\n    changeToProject(e){\n        this.sectionContent = this.storage.getProject(e.srcElement.textContent)\n        this.storage.selectedProject = this.sectionContent\n        this.loadSectionContent()\n    }\n\n    closeAddProjectSection(){\n        const sections = document.querySelector('.sections')\n        sections.removeChild(document.querySelector('.add-project-section'));\n        const addProjectBtn = document.querySelector('.add-project-btn');\n        addProjectBtn.style.display = 'block'\n    }\n\n    addProject(){\n        const projectInput = document.querySelector('#project-name-input')\n        if (projectInput.value == '' || this.storage.getProject(projectInput.value)){\n            return\n        }\n        this.storage.addNewProject(projectInput.value)\n        \n        const newProject = document.createElement('button')\n        newProject.classList.add('project-btn') \n        newProject.classList.add(projectInput.value)  \n        newProject.innerHTML = projectInput.value\n\n        const projectList = document.querySelector('.project-list')\n        projectList.appendChild(newProject)\n        newProject.addEventListener('click', this.changeToProject.bind(this))\n        \n        this.closeAddProjectSection() \n    }\n\n    openAddProjectSection(){\n        const addProjectBtn = document.querySelector('.add-project-btn');\n        addProjectBtn.style.display = 'none'\n\n        const addProjectSection = document.createElement('div');\n        addProjectSection.classList.add('add-project-section')\n        addProjectSection.innerHTML = `\n            <div class=\"project-input\">\n                <label for=\"project-name-input\">Enter project name:</label>\n                <input type=\"text\" id=\"project-name-input\" name=\"text-input\">\n            </div>\n            <div class=\"project-btns\">\n                <button class=\"add-btn project\">Add</button>\n                <button class=\"cancel-btn project\">Cancel</button>\n            </div>`;\n        const sections = document.querySelector('.sections')\n        sections.appendChild(addProjectSection)\n\n        let addBtnProject = document.querySelector('.add-btn.project');\n        let cancelBtnProject = document.querySelector('.cancel-btn.project');\n        addBtnProject.addEventListener('click', this.addProject.bind(this))\n        cancelBtnProject.addEventListener('click', this.closeAddProjectSection.bind(this))\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;