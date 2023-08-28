// Libraries
import { useLocation } from 'wouter'

// Components
import Slider from 'react-slick'

//Store
import { useNotes } from '../../store/notes.store'


const NotesSlider = () => {
	const { notes } = useNotes()

	const [location, setLocation] = useLocation()

	const settings = {
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 6,
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
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	}
	return (
		<div className='px-4 py-2 mb-8'>
			<Slider {...settings}>
				{notes.map(note => (
					<div
						className='px-4 py-2 text-center border bg-lime-200 hover:bg-lime-300 rounded-full  dark:text-white dark:bg-neutral-600 dark:hover:bg-neutral-800 transition-colors cursor-pointer'
						key={note.id}
						onClick={() => {
							setLocation(`/edit-note/${note.id}`)
						}}
					>
						{note.text.slice(0, 5)}
					</div>
				))}
			</Slider>
		</div>
	)
}

export default NotesSlider
