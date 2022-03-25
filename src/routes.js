import { AppPage } from './pages/AppPage'
import { LoginSignup } from './pages/LoginSignup'
import { MedicineTable } from './cmps/Doctor/Medicine/MedicineTable'
import { Timeline } from './pages/Timeline.jsx'
import { MedicinesChecklist } from './pages/MedicinesChecklist'
import { SuccessStories } from './pages/SuccessStories'
import { Contacts } from './pages/Contacts'
import { VideosPage } from './pages/VideosPage'
import { Visits } from './pages/Visits'
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
    {
        path: '/medicines',
        component: MedicinesChecklist,
        isExact: true
    },
    {
        path: '/success-stories',
        component: SuccessStories,
        isExact: true
    },
    {
        path: '/tips',
        component: SuccessStories,
        isExact: true
    },
    {
        path: '/contacts',
        component: Contacts,
        isExact: true
    },
    {
        path: '/videos',
        component: VideosPage,
        isExact: true
    },
    {
        path: '/visits',
        component: Visits,
        isExact: true
    },
]

export default routes;