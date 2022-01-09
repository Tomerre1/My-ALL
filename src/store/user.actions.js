import { userService } from "../services/user.service.js";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
})

export function onLogin(credentials) {
    return (dispatch) => {
        return userService.login(credentials)
            .then(user => {
                Toast.fire({
                    animation: true,
                    title: 'Signed in Successfully'
                });
                dispatch({
                    type: 'SET_USER',
                    user
                })

                return user;
            })
            .catch(err => {
                Toast.fire({
                    animation: true,
                    title: 'Signed in Successfully',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                console.log('Cannot login', err)
            })
    }
}

export function onSignup(credentials) {
    return (dispatch) => {
        return userService.signup(credentials)
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    user
                })
                return user;
            })
            .catch(err => {
                console.log('Cannot signup', err)
            })

    }
}

export function onLogout() {
    return (dispatch) => {
        userService.logout()
            .then(() => dispatch({
                type: 'SET_USER',
                user: null
            }))
            .catch(err => {
                console.log('Cannot logout', err)
            })
    }
}

export function onEditUser(user) {
    return (dispatch) => {
        userService.update(user)
            .then(() => dispatch({
                type: 'UPDATE_USER',
                user
            }))
            .catch(err => {
                console.log('Cannot update user', err)
            })
    }
}
