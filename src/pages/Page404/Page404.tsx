// Libraries
import { Link } from 'wouter'

// Components
import withLayout from '../../layout/withLayout'

// Hooks
import { useThemeToggling } from '../../hooks/useThemeToggling'

// Styles
import styles from './Page404.module.css'

const Page404 = () => {
	useThemeToggling()

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Wow, you find a treasure!</h1>
			<p className={styles.subText}>
				Nah, just kidding, go back to
				<span className={styles.link}>
					<Link href='/'> main page!</Link>
				</span>
			</p>
		</div>
	)
}

export default withLayout(Page404)
