export const ABOUT = "/about";


export const NOTES = "/notes";

// SCHEDULES
export const HOME = "/";
export const ADD_SCHEDULE = "/citas/crear"
export const EDIT_SCHEDULE = (id) => `/citas/${id}/editar`

// USERS
export const USERS = "/usuarios"
export const ADD_USER = "/usuarios/crear"
export const EDIT_USER = (id) => `/usuarios/${id}/editar`

// SERVICES
export const SERVICES = "/servicios"
export const ADD_SERVICE = "/servicios/crear"
export const EDIT_SERVICE = (id) => `/servicios/${id}/editar`

// AUTH
export const PROFILE = "/perfil";
export const LOGIN = "/iniciar-sesion";
export const REGISTER = "/registrarse";
export const FORGOT_PASSWORD = "/recuperar-cuenta";
export const RESET_PASSWORD = "/resetear-contrasena";
export const CHANGE_PASSWORD = "/perfil/actualizar-contrasena";
