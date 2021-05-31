import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./test-03";

test("Test theme button toggle", () => {
  render(<App />);
  const element = screen.getByTestId('custom-element')
  expect(element).toBeInTheDocument();

  const deleteElement = screen.getByTitle('Delete')
  const closeElement = screen.getByTitle('Close')
  expect(deleteElement).toBeInTheDocument();
  expect(closeElement).toBeInTheDocument();
  const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)
  const aboutAnchorNode = screen.getByText(/about/i)
  const dialogContainer = screen.getByRole('dialog')

});