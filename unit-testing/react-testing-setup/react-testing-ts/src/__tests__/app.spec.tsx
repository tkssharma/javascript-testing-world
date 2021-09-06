import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

it("text in state is changed after button Click", () => {
  const {getByText} = render(<App />)
  expect(getByText(/Initial/i).textContent).toBe('Initial State');
  fireEvent.click(getByText("State Change Button"))
  expect(getByText(/Initial/i).textContent).toBe('Initial State Changed');
})
