import { userService } from "../services/user.service.js";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    animation: true,
})


export function onLogin(credentials) {
    return (dispatch) => {
        return userService.login(credentials)
            .then(user => {
                Toast.fire({
                    title: user ? 'התחברות נעשתה בהצלחה' : 'איימיל או סיסמא לא נכונים',
                    icon: user ? 'success' : 'error',
                });
                dispatch({
                    type: 'SET_USER',
                    user
                })

                return user;
            })
            .catch(err => {
                console.log('Cannot login', err)
            })
    }
}

export function onSignup(credentials) {
    return (dispatch) => {
        return userService.signup(credentials)
            .then(user => {
                Toast.fire({
                    title: 'ההרשמה בוצעה בהצלחה',
                    icon: 'success',
                });
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
            .then(() => {
                Toast.fire({
                    title: 'התנתקות בוצעה בהצלחה',
                    icon: 'success',
                });
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
            )
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
