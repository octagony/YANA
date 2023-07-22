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
import Loader from '../components/Loader/Loader'
const App = () => {
	useThemeToggling()
	const { isLoading } = useAuthStore()
	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		)
	}

	return (
		<>
			<SearchBar />
			<animated.div style={animation}>
				<NotesGrid />
			</animated.div>
		</>
	)
}

export default withLayout(App)
