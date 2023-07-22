import { create } from 'zustand'
import { ISearch } from '../../types/ISearch'

export const useSearch = create<ISearch>(set => ({
	inputValue: '',
	setInputValue: text =>
		set(() => ({
			inputValue: text,
		})),
}))
