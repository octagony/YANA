// Libraries
import { useContext } from 'react'

// Context
import { AuthContext } from '../context/auth.context'

export const useAuthContext = () => useContext(AuthContext)
