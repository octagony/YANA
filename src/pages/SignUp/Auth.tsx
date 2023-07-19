import React, { MouseEvent, useEffect, useState } from 'react'
import authService from '../../services/auth/auth.service'
import { supabase } from '../../services/auth/auth.helpers'
import { useAuth } from '../../store/useAuth'
import { User } from '@supabase/supabase-js'
import { redirect } from 'react-router-dom'

const SignUpPage = () => {
	const [authData, setAuthData] = useState({ email: '', password: '' })
	const { email, setUser } = useAuth()

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault()
		const { data, error } = await supabase.auth.signUp({
			email: authData.email,
			password: authData.password,
		})
	}

	return (
		<form>
			<div>
				Email
				<input
					type='text'
					onChange={e => {
						setAuthData({ ...authData, email: e.target.value })
					}}
				/>
			</div>
			<div>
				Password
				<input
					type='text'
					onChange={e => {
						setAuthData({ ...authData, password: e.target.value })
					}}
				/>
			</div>
			<button onClick={e => handleSubmit(e)}>Click</button>
		</form>
	)
}

export default SignUpPage
