import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<App />);
    expect(wrapper.queryByTestId('App')).toBeTruthy();
  });

  it('has default state { isCardAdded: false }', () => {
    const wrapper = render(<App />);
    expect(wrapper.queryByTestId('Form')).toBeTruthy();
    expect(wrapper.queryByTestId('SuccessAlert')).toBeFalsy();
  });

  it('renders input', () => {
    const wrapper = render(<App />);

    console.log(wrapper.queryByTestId('CardNumberInput'));
    expect(wrapper.queryByTestId('CardNumberInput')).toBeTruthy();
  });

  it('renders button', () => {
    const wrapper = render(<App />);

    console.log(wrapper.queryByTestId('SaveButton'));
    expect(wrapper.queryByTestId('SaveButton')).toBeTruthy();
  });
});
