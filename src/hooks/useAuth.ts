// Libraries
import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useLocation } from 'wouter'
import { FirebaseError } from 'firebase/app'

// Store
import { useAuthStore } from '../store/auth.store'

const useAuth = () => {
	const { setUser, user, error, isLoading, setLoading, setError } =
		useAuthStore()
	const [location, setLocation] = useLocation()

	const handleError = (error: FirebaseError) => {
		switch (error.code) {
			case 'auth/wrong-password':
				setError(
					'Could not sign in with the provided email address and password.'
				)
				break
			case 'auth/user-not-found':
				setError('User not found')
				break
			case 'auth/weak-password':
				setError('Password must be at least 6 characters long')
				break
			case 'auth/email-already-in-use':
				setError('Email is already registered')
				break
			default:
				break
		}
	}

	const signUp = async (email: string, password: string) => {
		setLoading(true)
		try {
			await createUserWithEmailAndPassword(auth, email, password).then(data => {
				setUser({
					email: data.user.email,
					uid: data.user.uid,
				})
				setLocation('/')
			})
		} catch (error) {
			const result = error as FirebaseError
			console.error(result)
			handleError(result)
		} finally {
			setLoading(false)
		}
	}

	const login = async (email: string, password: string) => {
		setLoading(true)
		try {
			await signInWithEmailAndPassword(auth, email, password).then(data => {
				setUser({
					email: data.user.email,
					uid: data.user.uid,
				})
				setLoading(false)
				setLocation('/')
			})
		} catch (error) {
			const result = error as FirebaseError
			console.error(result)
			handleError(result)
		} finally {
			setLoading(false)
		}
	}

	const logout = async () => {
		setLoading(true)
		try {
			await signOut(auth).then(() => setUser({} as User))
		} catch (error) {
			const result = error as Error
			setError(result.message)
		} finally {
			setLoading(false)
		}
	}

	return { login, signUp, logout, user, error, isLoading }
}

export default useAuth
