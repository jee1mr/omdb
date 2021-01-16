// Imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

// UI
import { Result, Button } from 'antd'

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
          {/* All routes */}
          {ROUTES.map((route) => {
            return <RouteWithSubRoutes {...route} />
          })}
          {/* 404 */}
          <Route
            component={() => (
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                  <Button type="primary" href="/">
                    Back Home
                  </Button>
                }
              />
            )}
          />
        </Switch>
      </QueryClientProvider>
    </Router>
  )
}

export default App
