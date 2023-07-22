import { User } from 'firebase/auth'
import { create } from 'zustand'

interface AuthState {
	isLoading: boolean
	error: string
	user: User
	setLoading: (bool: boolean) => void
	setError: (error: string) => void
	setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(set => ({
	isLoading: false,
	error: '',
	user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (error: string) => set(state => ({ ...state, error })),
	setUser: (user: User) => set(state => ({ ...state, user })),
}))
