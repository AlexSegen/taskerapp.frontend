import React, { createContext, useEffect, useState } from 'react';
import { Comments, Tasks, Users } from '../services/mockup';

export const TasksContext = createContext()

const TasksContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    const [selected, setSelected] = useState(null);

    const [comments, setComments] = useState([]);

    const [users, setUsers] = useState([])

    const [composing, setComposing] = useState(false);

    useEffect(() => {
        setTasks(Tasks)
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
        <TasksContext.Provider value={{tasks, comments, users, selected, setSelected, composing, setComposing}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider;