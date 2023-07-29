import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App'
import { Route } from 'wouter'
import EditNote from './pages/EditNote/EditNote'
import Auth from './pages/Auth/Auth'
import { AuthProvider } from './context/auth.context'
import RouterApp from './router'

const app = document.getElementById('root') as HTMLBodyElement

const root = ReactDOM.createRoot(app)

root.render(
	<React.StrictMode>
		<AuthProvider>
			<RouterApp />
		</AuthProvider>
	</React.StrictMode>
)
