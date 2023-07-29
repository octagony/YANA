import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, ReactNode, useMemo, useEffect } from 'react'
import { useAuthStore } from '../store/auth.store'
import { auth } from '../firebase/config'
import { useLocation } from 'wouter'
import { TUser } from '../../types/IUser'

export interface AuthContextState {
	user: TUser
	isLoading: boolean
}

export const AuthContext = createContext<AuthContextState>({
	isLoading: false,
	user: {} as TUser,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const { isLoading, user, setUser, setLoading } = useAuthStore()

	const [location, setLocation] = useLocation()

	const value = useMemo(
		() => ({
			user,
			isLoading,
		}),
		[user, isLoading]
	)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
			} else {
				setUser({} as TUser)
				setLocation('/auth')
			}
			setLoading(false)
		})
		return () => unsubscribe()
	}, [])
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
