import { ReactNode } from 'react'

export interface IButton {
	children: ReactNode
	action?: () => void
	className?: string
	ariaLabel: 'Save note' | 'Logout'
}
