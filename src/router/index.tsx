import React from 'react'
import { Route } from 'wouter'
import App from '../pages/App'
import EditNote from '../pages/EditNote/EditNote'
import Auth from '../pages/Auth/Auth'

const RouterApp = () => {
	return (
		<>
			<Route path='/'>
				<App />
			</Route>
			<Route path='/edit-note/:id'>
				<EditNote />
			</Route>
			<Route path='/auth'>
				<Auth />
			</Route>
		</>
	)
}

export default RouterApp
