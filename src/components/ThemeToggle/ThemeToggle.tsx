import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../../store/theme.store'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme()
	return (
		<button
			className={styles.button}
			onClick={setTheme}
			aria-label='Theme Toggle'
		>
			{theme === 'light' ? <HiSun size={25} /> : <HiMoon size={25} />}
		</button>
	)
}

export default ThemeToggle
