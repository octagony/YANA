import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { useAuthContext } from '../hooks/useAuthContext'
import Loader from '../components/Loader/Loader'
import NotesSlider from '../components/NoteSlider/NotesSlider'

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
