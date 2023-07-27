import React, { useContext, useEffect } from 'react'
import NewNote from '../NewNote/NewNote'
import Note from '../Note/Note'
import { useNotes } from '../../store/notes.store'
import { useSearch } from '../../store/search.store'
import styles from './NotesGrid.module.css'
import { useAuthStore } from '../../store/auth.store'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { AuthContext } from '../../context/auth.context'
import { INote } from '../../../types/INotes'
import Loader from '../Loader/Loader'

const NotesGrid = () => {
	const { notes } = useNotes()
	const { inputValue } = useSearch()
	const { user } = useContext(AuthContext)
	const { setLoading, isLoading } = useAuthStore()
	const { setNotes } = useNotes()

	const notesCollectionRef = collection(db, 'users', `${user.uid}`, 'notes')
	const notesCollectionQuery = query(
		notesCollectionRef,
		orderBy('date', 'desc')
	)

	useEffect(() => {
		setLoading(true)
		onSnapshot(notesCollectionQuery, querySnapshot => {
			const notes: INote[] = []
			querySnapshot.forEach(doc => {
				const note = {
					id: doc.id,
					text: doc.data().text,
					date: doc.data().date,
				}
				notes.push(note)
			})
			setNotes(notes)
		})
		setLoading(false)
	}, [user.email])

	return (
		<main className={styles.wrapper}>
			<NewNote />
			{notes
				? notes
						.filter(note => note.text.toLowerCase().includes(inputValue))
						.map(note => <Note key={note.id} {...note} />)
				: null}
		</main>
	)
}

export default NotesGrid
