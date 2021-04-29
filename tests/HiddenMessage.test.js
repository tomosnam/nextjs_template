import { render, fireEvent } from './test-utils'
import * as React from 'react'

import HiddenMessage from '@pages/HiddenMessage'

describe('HiddenMessage', () => {
  test('shows the children when the checkbox is checked', () => {
    const testMessage = 'Test Message'
    const component = render(<HiddenMessage>{testMessage}</HiddenMessage>)
    expect(component.queryByText(testMessage)).toBeNull()
    fireEvent.click(component.getByLabelText(/show/i))
    expect(component.getByText(testMessage)).toBeInTheDocument()
  })
})
