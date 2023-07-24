import { create } from 'zustand'
import { TUser } from '../../types/IUser'

interface AuthState {
	isLoading: boolean
	error: string
	user: TUser
	setLoading: (bool: boolean) => void
	setError: (error: string) => void
	setUser: (user: TUser) => void
}

export const useAuthStore = create<AuthState>()(set => ({
	isLoading: false,
	error: '',
	user: {} as TUser,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (error: string) => set(state => ({ ...state, error })),
	setUser: (user: TUser) => set(state => ({ ...state, user })),
}))
