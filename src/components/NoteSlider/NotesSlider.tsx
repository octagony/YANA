import Slider from 'react-slick'
import { useNotes } from '../../store/notes.store'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'

const NotesSlider = () => {
	const { notes } = useNotes()
	const notesTitles = notes.map(note => note.text)

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
				{notesTitles.map(title => (
					<div
						className='p-2 text-center border border-red-50 rounded-full hover:bg-gray-300 dark:text-white dark:hover:text-neutral-700 transition-colors'
						key={title}
					>
						{title.slice(0, 5)}
					</div>
				))}
			</Slider>
		</div>
	)
}

export default NotesSlider
