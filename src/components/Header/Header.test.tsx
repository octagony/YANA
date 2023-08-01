import React from 'react'
import { render, screen, userEvent } from '../../../utils/testUtils'
import Header from './Header'

test('header rendering', async () => {
	render(<Header />)
	expect(screen.getByText(/yana/i)).toBeInTheDocument()
})
