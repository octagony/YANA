import React, { forwardRef } from 'react'
import styles from './Textarea.module.css'
import { ITextarea } from './Textarea.props'

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>((props, ref) => {
	const { value, changeFunc, keyDownFunc } = props
	return (
		<textarea
			className={styles.area}
			cols={10}
			rows={8}
			placeholder='Just start type...'
			value={value}
			ref={ref}
			onChange={changeFunc}
			onKeyDown={keyDownFunc}
		></textarea>
	)
})

export default Textarea
