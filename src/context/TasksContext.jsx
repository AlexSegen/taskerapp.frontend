import React, { createContext, useEffect, useState } from 'react';
import { Comments, Tasks, Users } from '../services/mockup';

export const TasksContext = createContext()

const TasksContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    const [selected, setSelected] = useState(null);

    const [comments, setComments] = useState([]);

    const [users, setUsers] = useState([])

    useEffect(() => {
        setTasks(Tasks)
        setComments(Comments)
        setUsers(Users)
    }, [])


    return (
        <TasksContext.Provider value={{tasks, comments, users, selected, setSelected}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider;