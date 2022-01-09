import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Burger } from './Burger.jsx'
// import { onLogin, onLogout, onSignup } from '../store/user.actions.js'
// import PropTypes from 'prop-types'
// import toyLogo from '../assets/img/toyLogo.svg'

export function AppHeader(props) {
    const [state, setState] = useState({
        isMobile: false,
        open: false
    })
    const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setState({ ...state, isMobile: true })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // onLogin = (credentials) => {
    //     this.props.onLogin(credentials)
    // }
    // onSignup = (credentials) => {
    //     this.props.onSignup(credentials)
    // }
    // onLogout = () => {
    //     this.props.onLogout()
    // }

    const toggleOpen = () => {
        const { open, isMobile } = state
        if (!isMobile) return
        setState({ ...state, open: !open })
    }

    const handleResize = () => {
        setState({ ...state, isMobile: window.innerWidth < 768 })
    }

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><img alt="logo" /></Link>
                </div>
                {/* <Burger user={user} onLogout={this.onLogout} open={state.open} toggleOpen={toggleOpen} /> */}
                <Burger user={user} open={state.open} toggleOpen={toggleOpen} />
            </div>
        </>
    )

}



// AppHeader.propTypes = {
//     user: PropTypes.object,
//     onLogin: PropTypes.func.isRequired,
//     onSignup: PropTypes.func.isRequired,
//     onLogout: PropTypes.func.isRequired
// }