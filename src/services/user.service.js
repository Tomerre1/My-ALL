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
    if (user) return _saveLocalUser(user)

}

async function signup(userCred) {
    console.log('%c  userCred:', 'color: white;background: red;', userCred);
    const user = await httpService.post('signup/', userCred)
    console.log('%c  user:', 'color: white;background: red;', user);
    return user
    // const user = await httpService.get('getalluser/')
    // console.log('%c  user:', 'color: white;background: red;', user);
    // return user
}

async function logout() {
    return await httpService.post('logout/')
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
