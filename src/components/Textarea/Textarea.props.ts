import { ChangeEvent, RefObject, KeyboardEvent } from 'react'

export interface PropsTextarea {
	value: string
	ref: RefObject<HTMLTextAreaElement>
	changeFunc: (event: ChangeEvent<HTMLTextAreaElement>) => void
	keyDownFunc: (event: KeyboardEvent<HTMLTextAreaElement>) => void
}
