import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App'
import EditNote from './pages/EditNote/EditNote'
import Page404 from './pages/Page404/Page404'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthPage from './pages/Auth/Auth'

const app = document.getElementById('root') as HTMLBodyElement

const root = ReactDOM.createRoot(app)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Page404 />,
	},
	{
		path: '/edit-note/:id',
		element: <EditNote />,
		errorElement: <Page404 />,
	},
	{
		path: '/auth',
		element: <AuthPage />,
		errorElement: <Page404 />,
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
