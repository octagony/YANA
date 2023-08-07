// Components
import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import Loader from '../components/Loader/Loader'
import NotesSlider from '../components/NoteSlider/NotesSlider'
import withLayout from '../layout/withLayout'

// Libraries
import { animated, useSpring } from '@react-spring/web'

// Hooks
import { useThemeToggling } from '../hooks/useThemeToggling'
import { useAuthContext } from '../hooks/useAuthContext'

const App = () => {
	const { user } = useAuthContext()

	useThemeToggling()

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	return (
		<>
			{!user.email ? (
				<Loader />
			) : (
				<>
					<NotesSlider />
					<animated.div style={animation}>
						<SearchBar />
						<NotesGrid />
					</animated.div>
				</>
			)}
		</>
	)
}

export default withLayout(App)
