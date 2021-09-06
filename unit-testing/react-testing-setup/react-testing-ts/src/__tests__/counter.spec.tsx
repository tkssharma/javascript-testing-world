import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../counter";

afterEach(cleanup);

it("counter must increase when button Clicked", () => {
  const component = render(<Counter />)
  const button = component.getByText("button");
  const currentCount = component.getByTestId('current-count');

  expect(currentCount.textContent).toBe("0");
  expect(document.title).toBe("you clicked 0 times");

  fireEvent.click(button);

  expect(currentCount.textContent).toBe("1");
  expect(document.title).toBe("you clicked 1 times");
})