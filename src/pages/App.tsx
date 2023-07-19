import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNotes } from '../store/useNotes'
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import authService from '../services/auth/auth.service'
import { User } from '@supabase/supabase-js'

const App = () => {
	const { notes, setNotes } = useNotes()
	// const [session, setSession] = useState<Session | null>(null)
	const [user, setUser] = useState<User | null>(null)

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

	// useEffect(() => {
	// 	supabase.auth.getSession().then(({ data: { session } }) => {
	// 		setSession(session)
	// 	})

	// 	const {
	// 		data: { subscription },
	// 	} = supabase.auth.onAuthStateChange((_event, session) => {
	// 		setSession(session)
	// 	})

	// 	return () => subscription.unsubscribe()
	// }, [])

	const onSubmit = () => {
		authService
			.registerUser({
				email: 'moctagony@gmail.com',
				password: 'testpassword',
			})
			.then(data => setUser(data.data.user))
			.finally(() => {
				console.log(user)
			})
	}

	return (
		<animated.div style={animation}>
			{/* <button onClick={onSubmit}>Click me</button> */}
			<SearchBar />
			<NotesGrid />
		</animated.div>
	)
}

export default withLayout(App)
