import React, { createContext, useEffect, useState, useReducer } from 'react';

import { getAll as getAllusers } from '../services/user.services';
import { getAll as getAllProjects } from '../services/project.services';
import { getAll, getSingle, createTask, updateTask, removeTask, toggleTask } from '../services/task.services';

import { TasksReducer, initialState } from './reducers/TasksReducer';

export const TasksContext = createContext()

const TasksContextProvider = ({children}) => {

    const [{ 
        tasks, 
        loadingTasks,
        errorTasks,
        selected, 
        loadingTask,
        errorTask,
        projects,
        loadingProjects,
        errorProjects,
        users,
        loadingUsers,
        errorUsers
    }, dispatch] = useReducer(TasksReducer, initialState)

    const [composing, setComposing] = useState(false);

    const getUsers = () => {
        dispatch({ type: "REQUEST_USERS" })
        getAllusers().then(data => {
            dispatch({ type: "SET_USERS", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_USERS_FAILURE", payload: error.message })
        })
    }

    const getProjects = () => {
        dispatch({ type: "REQUEST_PROJECTS" })
        getAllProjects().then(data => {
            dispatch({ type: "SET_PROJECTS", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_PROJECTS_FAILURE", payload: error.message })
        })
    }

    const getTasks = () => {
        dispatch({ type: "REQUEST_TASKS" })
        
        getAll().then(data => {
            dispatch({ type: "SET_TASKS", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_TASKS_FAILURE", payload: error.message })
        })
    }
    
    const setTask = task => {
        dispatch({ type: "REQUEST_TASK" })
        createTask(task).then(data => {
            dispatch({ type: "ADD_TASK", payload: data })
            dispatch({ type: "SET_SELECTED", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const getTask = id => {
        dispatch({ type: "REQUEST_TASK" })
        getSingle(id).then(data => {
            dispatch({ type: "SET_SELECTED", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const deleteTask = id => {
        dispatch({ type: "REQUEST_TASK" })
        removeTask(id).then(() => {
            dispatch({ type: "DELETE_TASK", payload: id })
        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const editTask = task => {
        dispatch({ type: "REQUEST_TASK" })
        updateTask(task).then(data => {
            dispatch({ type: "UPDATE_TASK", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const toggleTaskStatus = (task, fromDetails) => {
        dispatch({ type: "REQUEST_TASK" })

        toggleTask(task).then(data => {
            
            dispatch({ type: "UPDATE_TASK", payload: data })

            if (fromDetails)
                dispatch({ type: "SET_SELECTED", payload: data })

        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const setSelected = data => {
        dispatch({ type: "SET_SELECTED", payload: data })
    }


    useEffect(() => {
        if(selected)
            setComposing(false)

    }, [selected])

    useEffect(() => {
        if(composing)
            dispatch({ type: "SET_SELECTED", payload: null })
    }, [composing])

    const values = {
        // tasks
        tasks, 
        loadingTasks,
        errorTasks,

        selected, 
        setSelected,
        loadingTask,
        errorTask,

        projects,
        loadingProjects,
        errorProjects,
        
        users,
        loadingUsers,
        errorUsers,

        // methods
        getUsers,
        getProjects,
        getTasks,
        setTask,
        getTask,
        editTask,
        toggleTaskStatus,
        deleteTask,

        // composing
        composing,
        setComposing
    }

    return (
        <TasksContext.Provider value={values}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider;