import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './test-01';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const imgElement = screen.getByAltText(/logo/i);
  const imgElement1 = screen.getByAltText(/something/i);
  expect(linkElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
  expect(imgElement1).toBeInTheDocument();
});