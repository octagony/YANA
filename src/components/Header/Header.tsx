import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'
import { useAuthStore } from '../../store/auth.store'
import useAuth from '../../hooks/useAuth'

const Header = () => {
	const { user } = useAuthStore()
	const { logout } = useAuth()
	return (
		<header className={styles.header}>
			<div>
				<Link to='/'>
					<h1 className={styles.title}>YANA</h1>
				</Link>
				<span className={styles.subtitle}>Yet Another Notes App</span>
			</div>
			<div className='flex items-center gap-4'>
				{user?.email ? (
					<button onClick={logout}>Logout</button>
				) : (
					<Link to='/auth'>
						<button>Login</button>
					</Link>
				)}
				<ThemeToggle />
			</div>
		</header>
	)
}
export default Header
