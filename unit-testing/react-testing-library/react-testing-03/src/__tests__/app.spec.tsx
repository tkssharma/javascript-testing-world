import React from "react";
import TestHook from "../App";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../App";

afterEach(cleanup);

it("counter increments the count with RTL", () => {
  const component = render(<Counter />);

  const button = component.getByText("button");
  const currentCount = component.getByTestId("current-count");

  expect(currentCount.textContent).toBe("0");
  expect(document.title).toBe("you clicked 0 times");

  fireEvent.click(button);

  expect(currentCount.textContent).toBe("1");

  expect(document.title).toBe("you clicked 1 times");
});
