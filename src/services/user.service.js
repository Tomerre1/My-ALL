import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    query,
}

async function query() {
    const users = httpService.get('user/')
    return users
}

async function login(userCred) {
    const user = await httpService.post('login/', userCred)
    _saveLocalUser(user ? user : {})
    return user
}

async function signup(userCred) {
    const user = await httpService.post('signup/', userCred)
    return user
}

async function logout() {
    _saveLocalUser({})
    return await httpService.post('logout/')
}

function _saveLocalUser(user) {
    delete user.password
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
