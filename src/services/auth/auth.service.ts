import { supabase } from './auth.helpers'

interface IRegister {
	email: string
	password: string
}

class AuthService {
	async registerUser({ email, password }: IRegister) {
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
			})
			return { data, error }
		} catch (error: any) {
			throw new Error(error.message)
		}
	}
}

export default new AuthService()
