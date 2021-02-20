import React, { createContext, useEffect, useState } from 'react';
import { Comments, Users } from '../services/mockup';
import { getAll, getSingle, createTask, updateTask, removeTask } from '../services/task.services';

export const TasksContext = createContext()

const TasksContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    const [selected, setSelected] = useState(null);

    const [comments, setComments] = useState([]);

    const [users, setUsers] = useState([])

    const [composing, setComposing] = useState(false);

    const setTask = task => {
        createTask(task).then(data => {
            setSelected(data)
            setTasks([...tasks, data]);
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
        });
    }

    useEffect(() => {
        setComments(Comments)
        setUsers(Users)
    }, [])

    useEffect(() => {
        if(selected)
            setComposing(false)

    }, [selected])

    useEffect(() => {
        if(composing)
            setSelected(null)
    }, [composing])


    return (
        <TasksContext.Provider value={{getTasks, setTask, getTask, editTask, deleteTask, tasks, comments, users, selected, setSelected, composing, setComposing}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider;