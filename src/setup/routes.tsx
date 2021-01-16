// Imports
import React from 'react'
import { Route } from 'react-router-dom'

// App Imports
import HomePage from 'pages/Home/index'

interface RouteType {
  path: string
  exact?: boolean
  component: React.FC
  routes?: RouteType[]
}

// Render a route with potential sub routes
export const RouteWithSubRoutes = (route: RouteType) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props: any) => <route.component {...props} routes={route.routes} />}
    />
  )
}

// Routes Mapping
export const ROUTES = [{ path: '/', key: 'HOME', exact: true, component: HomePage }]
