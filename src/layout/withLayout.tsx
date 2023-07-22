import React, { ComponentType, useContext, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './withLayout.module.css'
import { ILayout } from './withLayout.props'
import { AuthContext, AuthProvider } from '../context/auth.context'
import { doc, onSnapshot } from 'firebase/firestore'
import { useNotes } from '../store/notes.store'
import { db } from '../firebase/config'

export function withLayout<T extends ILayout>(Component: ComponentType<T>) {
	return (hocProps: T) => {
		return (
			<AuthProvider>
				<div className={styles.wrapper}>
					<Header />
					<div className={styles.inject}>
						<Component {...(hocProps as T)} />
					</div>
					<Footer />
				</div>
			</AuthProvider>
		)
	}
}

export default withLayout
