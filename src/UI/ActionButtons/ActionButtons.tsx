// Styles
import styles from './ActionButtons.module.css'

const ActionButtons = () => {
	return (
		<>
			<p className={styles.infoBtns}>
				<code className={styles.mainBtn}>Ctrl</code>
				<code className={styles.secondBtn}>+</code>
				<code className={styles.mainBtn}>Enter</code>
				<code className={styles.secondBtn}>for save</code>
			</p>
		</>
	)
}

export default ActionButtons
