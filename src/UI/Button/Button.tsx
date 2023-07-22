import React from 'react'
import { IButton } from './Button.props'
import styles from './Button.module.css'

const Button = ({
	children,
	action,
	className,
	ariaLabel = 'Save note',
}: IButton) => {
	return (
		<button
			className={`${styles.btn} ${className}`}
			onClick={action}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	)
}

export default Button
