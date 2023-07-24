import React from 'react'
import { IButton } from './Button.props'
import styles from './Button.module.css'

const Button = ({
	children,
	action,
	className,
	ariaLabel = 'Save note',
	disabled,
}: IButton) => {
	return (
		<button
			className={`${styles.btn} ${className}`}
			onClick={action}
			aria-label={ariaLabel}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
