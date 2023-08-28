// Libraries
import React from 'react'
import { Route, Switch } from 'wouter'

// Components
import App from '../pages/App'
import EditNote from '../pages/EditNote/EditNote'
import Auth from '../pages/Auth/Auth'
import Page404 from '../pages/Page404/Page404'

const RouterApp = () => {
	return (
		<Switch>
			<Route path='/'>
				<App />
			</Route>
			<Route path='/edit-note/:id'>
				<EditNote />
			</Route>
			<Route path='/auth'>
				<Auth />
			</Route>
			<Route>
				<Page404 />
			</Route>
		</Switch>
	)
}

export default RouterApp
