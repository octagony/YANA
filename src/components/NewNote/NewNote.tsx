import {
	useState,
	useEffect,
	ChangeEvent,
	KeyboardEvent,
	createRef,
} from 'react'
import { useNotes } from '../../store/notes.store'
import Button from '../../UI/Button/Button'
import styles from './NewNote.module.css'
import Textarea from '../Textarea/Textarea'
import ActionButtons from '../../UI/ActionButtons/ActionButtons'
import { useAuthStore } from '../../store/auth.store'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { nanoid } from 'nanoid'

const NewNote = () => {
	const { notes } = useNotes()
	const { user, setLoading, isLoading } = useAuthStore()
	const [textNote, setTextNote] = useState<string>('')
	const areaRef = createRef<HTMLTextAreaElement>()

	const notesCollectionRef = collection(db, 'users', `${user.uid}`, 'notes')

	const [isSaveButtons, setIsSaveButton] = useState<boolean>(
		notes?.length > 0 ? false : true
	)

	useEffect(() => {
		notes?.length > 0 ? setIsSaveButton(false) : setIsSaveButton(true)
	}, [notes])

	useEffect(() => {
		if (areaRef.current) {
			areaRef.current.focus()
		}
	}, [])

	const saveNote = async () => {
		if (textNote.trim().length > 0) {
			setLoading(true)
			if (user.uid) {
				const currentDate = new Date().toString()
				await addDoc(notesCollectionRef, {
					id: nanoid(),
					text: textNote,
					date: currentDate,
				})
			}
			setLoading(false)
			setTextNote('')
		}
	}

	const handleChangeTextNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextNote(event?.target?.value)
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.ctrlKey && event.key === 'Enter') {
			saveNote()
		}
	}

	return (
		<div className={styles.wrapper}>
			<Textarea
				value={textNote}
				ref={areaRef}
				changeFunc={handleChangeTextNote}
				keyDownFunc={handleKeyDown}
				editMode={false}
			/>
			<div className={styles.saveBtn}>
				<Button disabled={isLoading} action={saveNote} ariaLabel='Save note'>
					Save
				</Button>
			</div>
			{isSaveButtons ? <ActionButtons /> : null}
		</div>
	)
}

export default NewNote
