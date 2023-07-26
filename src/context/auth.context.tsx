import { User, onAuthStateChanged } from 'firebase/auth'
import React, {
	createContext,
	ReactNode,
	useMemo,
	useEffect,
	useState,
} from 'react'
import { useAuthStore } from '../store/auth.store'
import { auth, db } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import { TUser } from '../../types/IUser'
import {
	CollectionReference,
	DocumentData,
	Query,
	collection,
	orderBy,
	query,
} from 'firebase/firestore'

export interface AuthContextState {
	user: TUser
	isLoading: boolean
}

export const AuthContext = createContext<AuthContextState>({
	isLoading: false,
	user: {} as TUser,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [initialLoader, setInitialLoader] = useState<boolean>(false)
	const { isLoading, user, setUser, setLoading } = useAuthStore()
	const navigator = useNavigate()

	const value = useMemo(
		() => ({
			user,
			isLoading,
		}),
		[user, isLoading]
	)

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
				navigator('/')
			} else {
				setLoading(false)
				setUser({} as TUser)
				navigator('/auth')
			}
			setInitialLoader(false)
			setLoading(false)
		})
	}, [])
	return (
		<AuthContext.Provider value={value}>
			{initialLoader ? 'Loader...' : children}
		</AuthContext.Provider>
	)
}
