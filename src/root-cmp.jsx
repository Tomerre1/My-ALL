import React from 'react'
import { Route } from 'react-router'
import routes from './routes'
import { AppHeader } from './cmps/AppHeader'

export class RootCmp extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    {routes.map(route => <Route key={route.path} exact={route.isExact} component={route.component} path={route.path} />)}
                </main>
            </div>
        )
    }
}


