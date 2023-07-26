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
				{user?.email && (
					<span className='block text-center mt-2 text-sm md:text-base lg:text-lg'>
						for {user?.email}
					</span>
				)}
			</div>
			<div className='flex flex-col-reverse items-center md:flex-row md:gap-4 sm:gap-4'>
				{user?.email ? (
					<div>
						<button className='text-sm md:text-lg' onClick={logout}>
							Logout
						</button>
					</div>
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
