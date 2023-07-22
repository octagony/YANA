import React, { useEffect } from 'react'
import NewNote from '../NewNote/NewNote'
import Note from '../Note/Note'
import { useNotes } from '../../store/notes.store'
import { useSearch } from '../../store/search.store'
import styles from './NotesGrid.module.css'
import { useAuthStore } from '../../store/auth.store'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'

const NotesGrid = () => {
	const { user } = useAuthStore()
	const { notes, setNotes } = useNotes()
	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user.email}`), doc => {
			setNotes(doc.data()?.watchList)
		})
	}, [])
	const { inputValue } = useSearch()

	return (
		<main className={styles.wrapper}>
			<NewNote />
			{notes
				.filter(note => note.text.toLowerCase().includes(inputValue))
				.map(note => (
					<Note key={note.id} {...note} />
				))}
		</main>
	)
}

export default NotesGrid
