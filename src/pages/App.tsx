import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNotes } from '../store/useNotes'
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../services/auth/auth.helpers'
import { useAuth } from '../store/useAuth'

const App = () => {
	const { notes, setNotes } = useNotes()
	const [session, setSession] = useState<Session | null>(null)
	const { email } = useAuth()

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

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, [])

	return (
		<animated.div style={animation}>
			{/* <button onClick={onSubmit}>Click me</button> */}
			<SearchBar />
			<NotesGrid />
			<div>{session && email}</div>
		</animated.div>
	)
}

export default withLayout(App)
