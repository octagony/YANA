import React from 'react'
import { render, screen, userEvent } from '../../../utils/testUtils'
import Footer from './Footer'

test('footer rendering', async () => {
	render(<Footer />)
	expect(screen.getByText(/octagony/i)).toBeInTheDocument()
})
