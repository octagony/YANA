import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { INotes, INote } from '../../types/INotes'

const getLocalStorage = (key: string) => {
	try {
		return JSON.parse(localStorage.getItem(key) || '[]')
	} catch (error: unknown) {
		console.log(`Error with get data from local storage: ${error}`)
		return null
	}
}

const setLocalStorage = (key: string, value: INote[]) => {
	try {
		return localStorage.setItem(key, JSON.stringify(value))
	} catch (error: unknown) {
		console.log(`Error with get data from local storage: ${error}`)
		return null
	}
}

export const useNotes = create<INotes>(set => ({
	notes: [],
	setNotes: notes => {
		console.log(notes)
		set(state => {
			state.notes = notes
			return {
				notes,
			}
		})
	},
	addNote: text =>
		set(state => ({
			notes: [
				{ text, id: nanoid(), date: new Date().toLocaleDateString() },
				...state.notes,
			],
		})),
	deleteNote: id => {
		set(state => ({
			notes: state.notes.filter(note => note.id !== id),
		}))
	},
	editNote: (id, value) => {
		set(state => ({
			notes: state.notes.map(note =>
				note.id === id
					? { ...note, text: value, date: new Date().toLocaleDateString() }
					: note
			),
		}))
	},
}))
