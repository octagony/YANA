import React, {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	createRef,
} from 'react'
import { useNotes } from '../../store/useNotes'
import Button from '../../UI/Button'
import styles from './NewNote.module.css'
import Textarea from '../Textarea/Textarea'

const NewNote = () => {
	const { notes, addNote } = useNotes()
	const [textNote, setTextNote] = useState<string>('')
	const areaRef = createRef<HTMLTextAreaElement>()

	const [isSaveButtons, setIsSaveButton] = useState<boolean>(
		notes.length > 0 ? false : true
	)

	useEffect(() => {
		notes.length > 0 ? setIsSaveButton(false) : setIsSaveButton(true)
	}, [notes])

	useEffect(() => {
		if (areaRef.current) {
			areaRef.current.focus()
		}
	}, [])

	const saveNote = () => {
		if (textNote.trim().length > 0) {
			addNote(textNote)
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
			/>
			<div className={styles.saveBtn}>
				<Button noteAction={saveNote}>Save</Button>
			</div>
			{isSaveButtons ? (
				<p className={styles.infoBtns}>
					<code className={styles.mainBtn}>Ctrl</code>
					<code className={styles.secondBtn}>+</code>
					<code className={styles.mainBtn}>Enter</code>
					<code className={styles.secondBtn}>for save</code>
				</p>
			) : (
				''
			)}
		</div>
	)
}

export default NewNote
