import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { INote } from '../../../types/INotes'
import styles from './Note.module.css'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import dayjs from 'dayjs'
import { db } from '../../firebase/config'
import { useAuthStore } from '../../store/auth.store'

const Note = ({ id, text, date }: INote) => {
	const { user, setError, setLoading } = useAuthStore()
	const notesCollectionRef = collection(db, 'users', `${user.uid}`, 'notes')

	const deleteNote = async (id: string) => {
		try {
			setLoading(true)
			await deleteDoc(doc(notesCollectionRef, id))
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
				<p>{dayjs(date).format('MM/DD/YYYY')}</p>
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
