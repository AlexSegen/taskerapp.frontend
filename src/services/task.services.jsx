import { Tasks, Projects } from './mockup';

import { randomString } from '../helpers/utils';

export const getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Tasks)
        }, 1000);
    })
}

export const getSingle = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const task = Tasks.find(task => task.id == id)
            resolve(task)
        }, 1000);
    })
}

export const removeTask = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id })
        }, 1000);
    })
}

export const createTask = task => {

    task.id = randomString();

    const project = Projects.find(item => item.id == task.project.id);

    if (project) {
        task.project = project || Projects.find(item => item.id == 5)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task)
        }, 1000);
    })
}