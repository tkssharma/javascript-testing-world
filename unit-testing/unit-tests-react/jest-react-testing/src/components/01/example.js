import { within } from '@testing-library/dom'

const messages = document.getElementById('messages')
const helloMessage = within(messages).getByText('hello')