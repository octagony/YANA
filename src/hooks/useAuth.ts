import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'
import { doc, setDoc } from 'firebase/firestore'

const useAuth = () => {
	const { setUser, user, error, isLoading, setLoading, setError } =
		useAuthStore()
	const navigator = useNavigate()

	const signUp = async (email: string, password: string) => {
		setLoading(true)
		try {
			await createUserWithEmailAndPassword(auth, email, password).then(data => {
				setUser(data.user)
				return setDoc(doc(db, 'users', email), {
					watchList: [],
				})
			})
		} catch (error) {
			const result = error as Error
			setError(result.message)
		} finally {
			setLoading(false)
		}
	}

	const login = async (email: string, password: string) => {
		setLoading(true)
		try {
			await signInWithEmailAndPassword(auth, email, password).then(data => {
				setUser(data.user)
				setLoading(false)
				navigator('/')
			})
		} catch (error) {
			const result = error as Error
			setError(result.message)
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
