import { User } from 'firebase/auth'

export interface IUser {
	email: string
	password: string
}

export type TUser = Pick<User, 'email' | 'uid'>
