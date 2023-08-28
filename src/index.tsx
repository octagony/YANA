// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterApp from './router'

// Context
import { AuthProvider } from './context/auth.context'

// Styles
import './index.css'

const app = document.getElementById('root') as HTMLBodyElement
const root = ReactDOM.createRoot(app)

root.render(
	<React.StrictMode>
		<AuthProvider>
			<RouterApp />
		</AuthProvider>
	</React.StrictMode>
)
