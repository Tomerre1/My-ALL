import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    query,
    queryMedicines,
    addMedicineToChecklist
}

async function query() {
    const users = httpService.get('user/')
    return users
}

async function queryMedicines(mail) {
    const medicines = await httpService.post('medicine/getListMedicines/', { mail })
    console.log('%c  medicines from api request:', 'color: white;background: red;', medicines);
    return medicines
}

async function addMedicineToChecklist({ medicineName, count }, mail, day) {

    console.log('%c  { medicineName, count, mail, day }:', 'color: white;background: red;', { medicineName, count, mail, day });
    const medicines = await httpService.post('medicine/addMedicineForDay/', { medicineName, count, mail, day })
    return medicines
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
    console.log('%c  logout:', 'color: white;background: red;');
    _saveLocalUser({})
    // return await httpService.post('logout/')
}

function _saveLocalUser(user) {
    delete user.password
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
