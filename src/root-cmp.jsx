import React from 'react'
import { Route } from 'react-router'
import routes from './routes'
import { AppHeader } from './cmps/Header/AppHeader'

export function RootCmp() {
    console.log('%c  window.location.pathname:', 'color: white;background: red;', window.location.pathname);

    return (
        <div>
            <AppHeader />
            <main>
                {routes.map(route => <Route key={route.path} exact={route.isExact} component={route.component} path={route.path} />)}
            </main>
        </div>
    )
}


