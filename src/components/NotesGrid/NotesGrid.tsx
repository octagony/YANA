import React, { useEffect, useLayoutEffect } from 'react'
import NewNote from '../NewNote/NewNote'
import Note from '../Note/Note'
import { useNotes } from '../../store/notes.store'
import { useSearch } from '../../store/search.store'
import styles from './NotesGrid.module.css'
import { useAuthStore } from '../../store/auth.store'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'

const NotesGrid = () => {
	const { notes } = useNotes()
	const { inputValue } = useSearch()

	return (
		<main className={styles.wrapper}>
			<NewNote />
			{notes
				? notes
						.filter(note => note.text.toLowerCase().includes(inputValue))
						.map(note => <Note key={note.id} {...note} />)
				: 'None'}
		</main>
	)
}

export default NotesGrid
