import { create } from 'zustand'

interface IAuth {
	email: string
	setUser: (email: string) => void
}

export const useAuth = create<IAuth>()(set => ({
	email: '',
	setUser: email => set(state => ({ email: (state.email = email) })),
}))
