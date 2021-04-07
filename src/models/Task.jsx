export class Task {
    constructor(task) {
        this._id = task && task._id ? task._id : 0
        this.title = task && task.title ? task.title : ""
        this.content = task && task.content ? task.content : ""
        this.content = task && task.content ? task.content : ""
        this.content = task && task.content ? task.content : ""
        this.content = task && task.content ? task.content : ""
    }
}

export class Project {
    constructor() {
        this._id = "";
        this.name = "";
    }
}