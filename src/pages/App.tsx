import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNotes } from '../store/notes.store'
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { db } from '../firebase/config'
import {
	collection,
	doc,
	getDoc,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore'
import useAuth from '../hooks/useAuth'
import { useAuthStore } from '../store/auth.store'
const App = () => {
	useThemeToggling()
	const { user, isLoading, setLoading } = useAuthStore()
	const { setNotes } = useNotes()
	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user.email}`), doc => {
			setLoading(true)
			console.log(doc?.data()?.watchList)
			setNotes(doc?.data()?.watchList)
			setLoading(false)
		})
	}, [user.email])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<animated.div style={animation}>
			<SearchBar />
			<NotesGrid />
		</animated.div>
	)
}

export default withLayout(App)
