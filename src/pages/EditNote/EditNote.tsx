import {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	useContext,
} from 'react'
import withLayout from '../../layout/withLayout'
import { useNotes } from '../../store/notes.store'
import Button from '../../UI/Button/Button'
import { animated, useSpring } from '@react-spring/web'
import { INote } from '../../../types/INotes'
import styles from './EditNote.module.css'
import { useNotify } from '../../hooks/useNotify'
import Textarea from '../../components/Textarea/Textarea'
import { Toaster } from 'react-hot-toast'
import { doc, updateDoc, collection } from 'firebase/firestore'
import { AuthContext } from '../../context/auth.context'
import { db } from '../../firebase/config'
import { useAuthStore } from '../../store/auth.store'
import { useLocation, useRoute } from 'wouter'
import Page404 from '../Page404/Page404'

const EditNote = () => {
	const { user, isLoading } = useContext(AuthContext)
	const { notes } = useNotes()
	const [match, params] = useRoute('/edit-note/:id')
	const { setLoading } = useAuthStore()
	const areaRef = useRef<HTMLTextAreaElement>(null)
	const { notify } = useNotify()
	const [location, setLocation] = useLocation()

	const notesCollectionRef = collection(db, 'users', `${user.uid}`, 'notes')

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	const note = notes.find((note: INote) => note.id === params?.id)
	const [handleChange, setHandleChange] = useState<string>(note?.text as string)

	useEffect(() => {
		if (areaRef.current) {
			areaRef.current.focus()
		}
	}, [])

	useEffect(() => {
		if (note?.id !== params?.id) {
			setLocation('/')
		}
	}, [])

	const saveNote = async () => {
		try {
			setLoading(true)
			await updateDoc(doc(notesCollectionRef, params?.id), {
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
