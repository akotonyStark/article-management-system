import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Loading from '../../src/components/Loading'

import { it, expect, describe } from 'vitest'

describe('Loading Component', () => {
    it('should display loading message passed as prop', () => {
        render(<Loading message='Downloading data'/>)
        screen.debug()

        const linkElement = screen.getByText(/Downloading data/)
        expect(linkElement).toBeInTheDocument()
    })
})