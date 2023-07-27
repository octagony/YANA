import React, { useEffect } from 'react'
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { useAuthStore } from '../store/auth.store'
import Loader from '../components/Loader/Loader'
import { useNotes } from '../store/notes.store'
const App = () => {
	const { notes } = useNotes()
	const { user, isLoading } = useAuthStore()
	useThemeToggling()
	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	return (
		<animated.div style={animation}>
			<SearchBar />
			<NotesGrid />
		</animated.div>
	)
}

export default withLayout(App)
