// Libraries
import { createPortal } from 'react-dom'
import cn from 'classnames'
// Props
import { IModalProps } from './Modal.props'
// Hooks
import { useThemeToggling } from '../../hooks/useThemeToggling'
// Styles
import styles from './Modal.module.css'

const Modal = ({ setModalMode, deleteNote, noteId }: IModalProps) => {
	useThemeToggling()

	return createPortal(
		<div className={styles.layout}>
			<div className={styles.wrapper}>
				<div className={styles.modal__box}>
					<p className={styles.modal__title}>
						Are you sure about delete this note?
					</p>
					<div className={styles.buttons__wrapper}>
						<button
							onClick={() => setModalMode(prev => !prev)}
							className={cn(styles.button, styles.button__cancel)}
						>
							Cancel
						</button>
						<button
							onClick={() => deleteNote(noteId)}
							className={cn(styles.button, styles.button__apply)}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Modal
