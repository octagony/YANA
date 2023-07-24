import React, {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	useContext,
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import withLayout from '../../layout/withLayout'
import { useNotes } from '../../store/notes.store'
import Button from '../../UI/Button/Button'
import { animated, useSpring } from '@react-spring/web'
import { INote, INotes } from '../../../types/INotes'
import styles from './EditNote.module.css'
import { useNotify } from '../../hooks/useNotify'
import Textarea from '../../components/Textarea/Textarea'
import { Toaster } from 'react-hot-toast'
import {
	arrayUnion,
	doc,
	updateDoc,
	query,
	where,
	collection,
	getDoc,
	onSnapshot,
	getFirestore,
} from 'firebase/firestore'
import { AuthContext } from '../../context/auth.context'
import { db } from '../../firebase/config'
import useAuth from '../../hooks/useAuth'
import { useAuthStore } from '../../store/auth.store'

const EditNote = () => {
	const { user, isLoading } = useContext(AuthContext)
	const { notes } = useNotes()
	const { id } = useParams()
	const { setLoading } = useAuthStore()
	const navigate = useNavigate()
	const areaRef = useRef<HTMLTextAreaElement>(null)
	const { notify } = useNotify()

	const notesCollectionRef = collection(db, 'users', `${user.uid}`, 'notes')

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	const note = notes.find((note: INote) => note.id === id)
	const [handleChange, setHandleChange] = useState<string>(note?.text as string)

	useEffect(() => {
		if (areaRef.current) {
			areaRef.current.focus()
		}
	}, [])

	useEffect(() => {
		if (note?.id !== id) {
			navigate('/')
		}
	}, [])

	const saveNote = async () => {
		try {
			setLoading(true)
			await updateDoc(doc(notesCollectionRef, id), {
				text: handleChange,
			})
			notify.success()
		} catch (e) {
			notify.error()
			console.error('Error:', e)
		} finally {
			setLoading(false)
		}
	}

	const handleChangeTextNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setHandleChange(event.target.value)
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.ctrlKey && event.key === 'Enter') {
			saveNote()
		}
	}

	return (
		<animated.div style={animation}>
			<h2 className={styles.title}>Edit Note</h2>
			<div className={styles.wrapper}>
				<Textarea
					value={handleChange}
					ref={areaRef}
					changeFunc={handleChangeTextNote}
					keyDownFunc={handleKeyDown}
					editMode={true}
				/>
				<Button
					disabled={isLoading}
					ariaLabel='Save note'
					className={styles.btn}
					action={saveNote}
				>
					Save
				</Button>
				<Toaster />
			</div>
		</animated.div>
	)
}

export default withLayout(EditNote)
