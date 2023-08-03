import NotesGrid from '../components/NotesGrid/NotesGrid'
import SearchBar from '../components/SearchBar/SearchBar'
import withLayout from '../layout/withLayout'
import { animated, useSpring } from '@react-spring/web'
import { useThemeToggling } from '../hooks/useThemeToggling'
import { useAuthContext } from '../hooks/useAuthContext'
import Loader from '../components/Loader/Loader'
import Slider from 'react-slick'
import { useNotes } from '../store/notes.store'

const App = () => {
	const { user } = useAuthContext()
	const { notes } = useNotes()

	const notesTitles = notes.map(note => note.text)

	useThemeToggling()

	const animation = useSpring({
		x: 0,
		from: {
			x: -300,
		},
	})

	const settings = {
		dots: false,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 10,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	}

	return (
		<>
			<div className='px-4 py-2 mb-8'>
				<Slider {...settings}>
					{notesTitles.map(title => (
						<div
							className='p-2 text-center border border-red-50 dark:bg-gray-300 dark:text-neutral-800 rounded-full'
							key={title}
						>
							{title.slice(0, 5)}
						</div>
					))}
				</Slider>
			</div>

			{!user.email ? (
				<Loader />
			) : (
				<animated.div style={animation}>
					<SearchBar />
					<NotesGrid />
				</animated.div>
			)}
		</>
	)
}

export default withLayout(App)
