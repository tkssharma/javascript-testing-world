import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Register from '../Register'
import * as api from '../api'


jest.mock('../api')
api.registerUser = jest.fn()

afterEach(cleanup)

describe('<Register />', () => {
  let container = null
  beforeEach(() => {
    container = render(<Register />)
  })

  it('should render', () => {
    const { getByLabelText, getByText } = container
    getByText('Register user')
    getByLabelText('Name')
    getByText('Save')
  })

  it('should not call api registerUser method', () => {
    const { getByTestId } = container
    fireEvent.click(getByTestId('button'))
    expect(api.registerUser).toHaveBeenCalledTimes(0)
  })

  it('should call api registerUser method', () => {
    const { getByLabelText, getByTestId } = container

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Steve Jobs' }})

    fireEvent.click(getByTestId('button'))
    expect(api.registerUser).toHaveBeenCalledTimes(1)
  })
})
