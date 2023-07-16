import React, { useState, useEffect, useRef, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import withLayout from '../../layout/withLayout'
import { useNotes } from '../../store/useNotes'
import Button from '../../UI/Button'
import { animated, useSpring } from '@react-spring/web'
import { INote } from '../../../types/INotes'
import styles from './EditNote.module.css'
import { useThemeToggling } from '../../hooks/useThemeToggling'
import { AiOutlineSave } from 'react-icons/ai'
import Textarea from '../../components/Textarea/Textarea'

const EditNote = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [isTooltipShow, setIsTooltipShow] = useState<boolean>(false)
	const areaRef = useRef<HTMLTextAreaElement>(null)

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	const { notes, setNotes } = useNotes()
	const { editNote } = useNotes()
	const theme = useThemeToggling()

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

	useEffect(() => {
		const tooltopTimeout = setTimeout(() => {
			setIsTooltipShow(false)
		}, 1000)
		return () => clearTimeout(tooltopTimeout)
	}, [isTooltipShow])

	const saveNote = () => {
		try {
			editNote(id as string, handleChange)
			setIsTooltipShow(true)
		} catch (e) {
			console.error('Error:', e)
		}
	}

	const handleChangeTextNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setHandleChange(event.target.value)
	}

	const handleKeyDown = (event: KeyboardEvent) => {
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
				/>
				<Button className={styles.btn} noteAction={saveNote}>
					Save
				</Button>
				{isTooltipShow ? (
					<AiOutlineSave className='absolute bottom-6 right-6' size={30} />
				) : null}
			</div>
		</animated.div>
	)
}

export default withLayout(EditNote)
