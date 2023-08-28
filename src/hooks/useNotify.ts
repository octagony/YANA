// Libraries
import { toast } from 'react-hot-toast'

// Hooks
import { useThemeToggling } from './useThemeToggling'

export const useNotify = () => {
	const [theme] = useThemeToggling()
	const notifyStyles = {
		background: `${theme === 'dark' ? '#fff' : '#121111'}`,
		color: `${theme === 'dark' ? '#404040' : '#fff'}`,
	}
	const notify = {
		success: () =>
			toast.success('Note saved!', {
				style: { ...notifyStyles },
			}),
		error: () =>
			toast.error('Oh-oh, something went wrong!', {
				style: { ...notifyStyles },
			}),
	}
	return { notify } as const
}
