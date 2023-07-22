import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { INotes, INote } from '../../types/INotes'
import { useAuthStore } from './auth.store'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { update } from '@react-spring/web'

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
		set(state => ({ ...state, notes }))
	},
	addNote: async text => {
		// setLoading(true)
		// if (user.email) {
		// 	await updateDoc(notePath, {
		// 		watchList: arrayUnion({
		// 			id: nanoid(),
		// 			text,
		// 			date: Date.now().toLocaleString(),
		// 		}),
		// 	})
		// }
	},
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
