import { AppPage } from './pages/AppPage'
import { LoginSignup } from './pages/LoginSignup'
import { MedicineTable } from './cmps/Doctor/Medicine/MedicineTable'
import { Timeline } from './pages/Timeline.jsx'
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
    {
        path: '/admin',
        component: MedicineTable,
        isExact: true
    },
    {
        path: '/timeline',
        component: Timeline,
        isExact: true
    },
]

export default routes;