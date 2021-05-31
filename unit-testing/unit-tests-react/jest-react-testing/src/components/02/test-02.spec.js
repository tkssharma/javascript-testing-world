import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./test-02";

test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

test("Test theme button toggle multiple click", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/light/i);
});