import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNotes } from '../../store/notes.store'
import { INote } from '../../../types/INotes'
import styles from './Note.module.css'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useAuthStore } from '../../store/auth.store'

const Note = ({ id, text, date }: INote) => {
	const { user, setError, setLoading } = useAuthStore()
	const { notes } = useNotes()
	const deleteNote = async (id: string) => {
		try {
			setLoading(true)
			const result = notes.filter(note => note.id !== id)
			await updateDoc(doc(db, 'users', `${user.email}`), {
				watchList: result,
			})
		} catch (error) {
			const err = error as Error
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className={styles.wrapper}>
			<span>{text.length > 50 ? `${text.slice(0, 50)}...` : text}</span>
			<div className={styles.info}>
				<p>{date}</p>
				<div className={styles.iconsWrapper}>
					<Link className={styles.icon} to={`/edit-note/${id}`}>
						<AiFillEdit size={25} />
					</Link>
					<FaTrash
						className={styles.icon}
						size={20}
						onClick={() => deleteNote(id)}
					/>
				</div>
			</div>
		</div>
	)
}

export default Note
