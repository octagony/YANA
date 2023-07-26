import React, { useState } from 'react'
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { useAuthStore } from '../store/auth.store'
import Loader from '../components/Loader/Loader'
import { Suspense } from 'react'
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
		<Suspense fallback={<Loader />}>
			<animated.div style={animation}>
				<SearchBar />
				<NotesGrid />
			</animated.div>
		</Suspense>
	)
}

export default withLayout(App)
