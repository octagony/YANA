import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
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
