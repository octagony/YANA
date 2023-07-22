import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNotes } from '../store/notes.store'
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { useAuthStore } from '../store/auth.store'

const App = () => {
	const { notes, setNotes } = useNotes()
	const { user } = useAuthStore()
	console.log(user)

	useThemeToggling()

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	useEffect(() => {
		setNotes(notes)
	}, [notes, setNotes])

	return (
		<animated.div style={animation}>
			<SearchBar />
			<NotesGrid />
		</animated.div>
	)
}

export default withLayout(App)
