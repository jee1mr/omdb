// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'antd/dist/antd.css'

// App Imports
import App from './App'

// Setup API Base URL
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

ReactDOM.render(<App />, document.getElementById('root'))
