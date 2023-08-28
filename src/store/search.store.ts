// Libraries
import { create } from 'zustand'

// Types
import { ISearch } from '../../types/ISearch'

export const useSearch = create<ISearch>(set => ({
	inputValue: '',
	setInputValue: text =>
		set(() => ({
			inputValue: text,
		})),
}))
