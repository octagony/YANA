import ReactDOM from 'react-dom'
import { IModalProps } from './Modal.props'
import { useThemeToggling } from '../../hooks/useThemeToggling'

const Modal = ({ setModalMode, deleteNote, noteId }: IModalProps) => {
	useThemeToggling()

	return ReactDOM.createPortal(
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
			<div className='relative top-1/3 mx-auto p-5 border w-11/12 sm:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white dark:bg-neutral-700'>
				<div className='mt-3 text-center'>
					<p className='text-lg text-gray-500 dark:text-white'>
						Are you sure about delete this note?
					</p>
					<div className='flex gap-2 justify-center items-center px-4 py-3'>
						<button
							onClick={() => setModalMode(prev => !prev)}
							id='ok-btn'
							className='px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full md:w-1/2 shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-300'
						>
							Cancel
						</button>
						<button
							onClick={() => deleteNote(noteId)}
							id='ok-btn'
							className='px-4 py-2 bg-green-500 text-white 
							md:w-1/2 text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Modal
