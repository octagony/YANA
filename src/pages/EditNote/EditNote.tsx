import React, {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import withLayout from '../../layout/withLayout'
import { useNotes } from '../../store/useNotes'
import Button from '../../UI/Button/Button'
import { animated, useSpring } from '@react-spring/web'
import { INote } from '../../../types/INotes'
import styles from './EditNote.module.css'
import { useNotify } from '../../hooks/useNotify'
import Textarea from '../../components/Textarea/Textarea'
import { Toaster } from 'react-hot-toast'

const EditNote = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const areaRef = useRef<HTMLTextAreaElement>(null)
	const { notify } = useNotify()

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	const { notes, setNotes } = useNotes()
	const { editNote } = useNotes()

	const note = notes.find((note: INote) => note.id === id)
	const [handleChange, setHandleChange] = useState<string>(note?.text as string)

	useEffect(() => {
		setNotes(notes)
	}, [notes, setNotes])

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

	const saveNote = () => {
		try {
			editNote(id as string, handleChange)
			notify.success()
		} catch (e) {
			notify.error()
			console.error('Error:', e)
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
				<Button className={styles.btn} noteAction={saveNote}>
					Save
				</Button>
				<Toaster />
			</div>
		</animated.div>
	)
}

export default withLayout(EditNote)
