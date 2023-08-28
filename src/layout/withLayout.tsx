// Libraries
import React, { ComponentType } from 'react'

// Components 
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

// Types
import { ILayout } from './withLayout.props'

// Styles
import styles from './withLayout.module.css'

export function withLayout<T extends ILayout>(Component: ComponentType<T>) {
	return (hocProps: T) => {
		return (
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.inject}>
					<Component {...(hocProps as T)} />
				</div>
				<Footer />
			</div>
		)
	}
}

export default withLayout
