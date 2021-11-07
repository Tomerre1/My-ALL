import { AppPage } from './pages/AppPage'
import { LoginSignup } from './pages/LoginSignup'

const routes = [
    {
        path: '/',
        component: AppPage,
        isExact: true
    },
    {
        path: '/auth',
        component: LoginSignup,
        isExact: true
    },
]

export default routes;