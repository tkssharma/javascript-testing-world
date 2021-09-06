import React from "react";
import TestHook from "../App";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("Text in state is changed when button clicked", () => {
  const { getByText } = render(<TestHook />);

  expect(getByText(/Initial/i).textContent).toBe("Initial State");

  fireEvent.click(getByText("State Change Button"));

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});
