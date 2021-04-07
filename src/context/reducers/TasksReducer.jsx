export const TaskInitialState = {
    _id: 0,
    title: "",
    content: "",
    project: {
        _id: 0
    },
    completed: false,
    assigned: null,
    tag: [],
    redirect: false
  }

export const initialState = {
    loadingTasks: false,
    errorTasks: false,
    loadingTask: false,
    errorTask: false,
    loadingProjects: false,
    errorProjects: false,
    tasks: [],
    filtered: [],
    selected: TaskInitialState,
    projects: [],
    users: [],
    loadingUsers: false,
    errorUsers: false,
}

export const TasksReducer = (state, action) => {

    switch (action.type) {
        case "REQUEST_TASK":
            return {
                ...state,
                loadingTask: true,
                errorTask: false
            }
        case "REQUEST_TASKS":
            return {
                ...state,
                loadingTasks: true,
                errorTasks: false
            }
        case "REQUEST_PROJECTS":
            return {
                ...state,
                loadingProjects: true,
                errorProjects: false,
            }
        case "REQUEST_USERS":
            return {
                ...state,
                loadingUsers: true,
                errorUsers: false,
            }
        case "REQUEST_TASKS_FAILURE":
            return {
                ...state,
                loadingTasks: false,
                errorTasks: action.payload,
            }
        case "REQUEST_TASK_FAILURE":
            return {
                ...state,
                loadingTask: false,
                errorTask: action.payload,
            }
        case "REQUEST_PROJECTS_FAILURE":
            return {
                ...state,
                loadingProjects: false,
                errorProjects: action.payload,
            }
        case "REQUEST_USERS_FAILURE":
            return {
                ...state,
                loadingUsers: false,
                errorUsers: action.payload,
            }
        case "SET_PROJECTS":
            return {
                ...state,
                projects: action.payload,
                loadingProjects: false
            }

        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            }

        case "SET_SELECTED":
            return {
                ...state,
                loadingTask: false,
                selected: action.payload
            }

        case "REMOVE_SELECTED":
            return {
                ...state,
                loadingTask: false,
                selected: TaskInitialState
            }

        case "ADD_TASK":
        
            return {
                ...state,
                selected: {...action.payload, isNew: true},
                tasks: [action.payload, ...state.tasks],
                loadingTask: false
            }
        case "SET_FILTERED":
            return {
                ...state,
                filtered: state.tasks.filter(task => action.payload === "all" ? true : (task.project._id === action.payload)),
            }
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload,
                filtered: action.payload,
                loadingTasks: false
            }
        case "SET_TASK":
            return {
                ...state,
                selected: action.payload,
                loadingTask: false
            }

        case "UPDATE_TASK":

            let tmp = state.tasks;

            tmp[tmp.findIndex(t => t._id === action.payload._id)] = action.payload;

            return {
                ...state,
                loadingTask: false,
                selected: action.payload,
                tasks: [...tmp]
            }

        case "DELETE_TASK":

            return {
                ...state,
                selected: {...TaskInitialState, redirect: true},
                loadingTask: false,
                tasks: [...state.tasks.filter(t => t._id !== action.payload)]
            }
    
        default:
            return {
                ...state
            }
    }

}