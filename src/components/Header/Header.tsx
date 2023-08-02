import { Link } from 'wouter'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'
import { useAuthStore } from '../../store/auth.store'
import useAuth from '../../hooks/useAuth'
import { HiOutlineLogout, HiOutlineLogin } from 'react-icons/hi'

const Header = () => {
	const { user } = useAuthStore()
	const { logout } = useAuth()
	return (
		<header className={styles.header}>
			<div className={styles.header__info}>
				<Link to={user?.email ? '/' : '/auth'}>
					<h1 className={styles.title}>YANA</h1>
				</Link>
				<span className={styles.subtitle}>Yet Another Notes App</span>
				{user?.email && (
					<span className={styles.user__info}>for {user?.email}</span>
				)}
			</div>
			<div className={styles.icons__wrapper}>
				{user?.email ? (
					<HiOutlineLogout
						className={styles.auth__btns}
						size={25}
						onClick={logout}
					/>
				) : (
					<Link href='/auth'>
						<HiOutlineLogin className={styles.auth__btns} size={25} />
					</Link>
				)}
				<ThemeToggle />
			</div>
		</header>
	)
}
export default Header
