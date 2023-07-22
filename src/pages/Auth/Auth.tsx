import React, { MouseEvent, useEffect, useState } from 'react'
import withLayout from '../../layout/withLayout'
import { useThemeToggling } from '../../hooks/useThemeToggling'

const AuthPage = () => {
	const [authState, setAuthState] = useState<'signup' | 'signin'>('signin')

	const toggleAuth = () => {
		setAuthState(prev => (prev === 'signin' ? 'signup' : 'signin'))
	}

	useThemeToggling()

	return (
		<div>
			<div className='grid place-items-center mx-2 my-20'>
				<div
					className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
					px-6 py-10 sm:px-10 sm:py-6 
					bg-white rounded-lg shadow-md lg:shadow-lg'
				>
					<h2 className='text-center font-semibold text-3xl lg:text-4xl text-gray-800'>
						{authState === 'signup' ? 'Sign Up' : 'Login'}
					</h2>

					<form className='mt-10' method='POST'>
						<label
							htmlFor='email'
							className='block text-xs font-semibold text-gray-600 uppercase'
						>
							E-mail
						</label>
						<input
							id='email'
							type='email'
							name='email'
							placeholder='e-mail address'
							className='block w-full py-3 px-1 mt-2 
									text-gray-800 appearance-none 
									border-b-2 border-gray-100
									focus:text-gray-500 focus:outline-none focus:border-gray-200'
							required
						/>

						<label
							htmlFor='password'
							className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
						>
							Password
						</label>
						<input
							id='password'
							type='password'
							name='password'
							placeholder='password'
							className='block w-full py-3 px-1 mt-2 mb-4
									text-gray-800 appearance-none 
									border-b-2 border-gray-100
									focus:text-gray-500 focus:outline-none focus:border-gray-200'
							required
						/>

						<button
							type='submit'
							className='w-full py-3 mt-10 bg-gray-800 rounded-sm
									font-medium text-white uppercase
									focus:outline-none hover:bg-gray-700 hover:shadow-none'
						>
							{authState === 'signup' ? 'Sign Up' : 'Login'}
						</button>

						<div className='sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center gap-2'>
							<p className='flex-2'>
								{authState === 'signup'
									? 'Already have account?'
									: 'Not account yet?'}
							</p>
							<span
								className='flex-2 underline cursor-pointer'
								onClick={toggleAuth}
							>
								{authState === 'signup' ? 'Sign in' : 'Sign up now'}
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default withLayout(AuthPage)
