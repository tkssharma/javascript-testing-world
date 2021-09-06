import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Counter from "./App";

beforeEach(cleanup);
it("counter increments the count with RTL", () => {
  const component = render(<Counter />);

  const button = component.getByTestId("btn");
  const currentCount = component.getByTestId("current-count");

  expect(currentCount.textContent).toBe("0");
  expect(document.title).toBe("you clicked 0 times");

  fireEvent.click(button);

  expect(currentCount.textContent).toBe("1");

  expect(document.title).toBe("you clicked 1 times");
});
