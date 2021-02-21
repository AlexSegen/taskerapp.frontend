import React, { createContext, useEffect, useState } from 'react';
import { Comments } from '../services/mockup';

import { getAll as getAllusers } from '../services/user.services';
import { getAll as getAllProjects } from '../services/project.services';
import { getAll, getSingle, createTask, updateTask, removeTask, toggleTask } from '../services/task.services';

export const TasksContext = createContext()

const TasksContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    const [selected, setSelected] = useState(null);

    const [projects, setProjects] = useState([]);

    const [comments, setComments] = useState([]);

    const [users, setUsers] = useState([])

    const [composing, setComposing] = useState(false);

    const getUsers = () => {
        getAllusers().then(data => {
            setUsers(data)
        })
    }

    const getProjects = () => {
        getAllProjects().then(data => {
            setProjects(data)
        })
    }

    const setTask = task => {
        createTask(task).then(data => {
            setSelected(data)
            setTasks([data, ...tasks]);
        })
    }

    const getTasks = () => {
        getAll().then(data => {
            setTasks(data)
        })
    }

    const getTask = id => {
        getSingle(id).then(data => {
            setSelected(data)
        });
    }

    const deleteTask = id => {
        removeTask(id).then(() => {
            setTasks([...tasks.filter(t => t._id != id)]);
            setSelected(null);
        });
    }

    const editTask = task => {
        updateTask(task).then(data => {
            tasks[tasks.findIndex(t => t._id == data._id)] = data;
            setTasks([...tasks])
            setSelected(data);
        });
    }

    const toggleTaskStatus = task => {
        toggleTask(task).then(data => {
            tasks[tasks.findIndex(t => t._id == data._id)] = data;
            setTasks([...tasks])
            setSelected(data);
        });
    }

    useEffect(() => {
        setComments(Comments)
    }, [])

    useEffect(() => {
        if(selected)
            setComposing(false)

    }, [selected])

    useEffect(() => {
        if(composing)
            setSelected(null)
    }, [composing])

    const values = {getUsers, getProjects, getTasks, setTask, getTask, editTask, toggleTaskStatus, deleteTask, tasks, comments, projects, users, selected, setSelected, composing, setComposing}

    return (
        <TasksContext.Provider value={values}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider;