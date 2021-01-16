// Imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

// App Imports
import { RouteWithSubRoutes, ROUTES } from './setup/routes'

// React Query initialization
const queryClient = new QueryClient()

// Component
const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Switch>
          {ROUTES.map((route) => {
            return <RouteWithSubRoutes {...route} />
          })}
          <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
      </QueryClientProvider>
    </Router>
  )
}

export default App
