import React, { createContext, useEffect, useState, useReducer } from 'react';


import { useAuth } from '../hooks/useAuth';
import { useNotification } from '../hooks/useNotification';
import { getAll as getAllusers } from '../services/user.services';
import { getAll as getAllProjects } from '../services/project.services';
import { getAll, getSingle, createTask, updateTask, removeTask, toggleTask } from '../services/task.services';

import { TasksReducer, initialState, TaskInitialState } from './reducers/TasksReducer';

export const TasksContext = createContext()

const TasksContextProvider = ({children}) => {

    const { user } = useAuth();

    const { toastSuccess, toastError } = useNotification();


    const [completed, setCompleted] = useState([])
    const [todo, setTodo] = useState([])
    const [done, setDone] = useState([])
    const [myTasks, setMyTasks] = useState([]);

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
        errorUsers,
        filtered
    }, dispatch] = useReducer(TasksReducer, initialState)


    const setSelected = data => {
        dispatch({ type: "SET_SELECTED", payload: data })
    }

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
        dispatch({ type: "SET_TASKS", payload: [] })
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
            toastSuccess("Task added");

        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const getTask = id => {
        dispatch({ type: "REQUEST_TASK" })
        getSingle(id).then(data => {
            setSelected(data)
        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const deleteTask = id => {
        dispatch({ type: "REQUEST_TASK" })
        removeTask(id).then(() => {
            dispatch({ type: "DELETE_TASK", payload: id })
            toastSuccess("Task deleted");
        }).catch(error => {
            dispatch({ type: "REQUEST_TASK_FAILURE", payload: error.message })
        })
    }

    const editTask = task => {
        dispatch({ type: "REQUEST_TASK" })
        updateTask(task).then(data => {
            dispatch({ type: "UPDATE_TASK", payload: data })
            toastSuccess("Task updated");
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

    const setFiltered = projectId => {
        dispatch({ type: "SET_FILTERED", payload: projectId })
    }

    useEffect(() => {
        if(tasks.length > 0) {
            setCompleted([...tasks.filter(t => t.completed)]);
            setTodo([...tasks.filter(t => t.assigned && (t.assigned._id === user._id) && t.completed)]);
            setMyTasks([...tasks.filter(t => t.assigned && (t.assigned._id === user._id))]);
            setDone([...tasks.filter(t => t.assigned && (t.assigned._id === user._id) && t.completed)]);
        }
    }, [tasks])
    

    const values = {

        // tasks
        tasks, 
        loadingTasks,
        errorTasks,
        filtered,
        setFiltered,

        selected, 
        setSelected,
        loadingTask,
        errorTask,
        TaskInitialState,

        projects,
        loadingProjects,
        errorProjects,
        
        users,
        loadingUsers,
        errorUsers,

        completed,
        todo,
        myTasks,
        done,

        // methods
        getUsers,
        getProjects,
        getTasks,
        setTask,
        getTask,
        editTask,
        toggleTaskStatus,
        deleteTask,

    }

    return (
        <TasksContext.Provider value={values}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider;