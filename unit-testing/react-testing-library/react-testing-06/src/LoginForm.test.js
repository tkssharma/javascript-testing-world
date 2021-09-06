import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("enables button when both email and password are entered", () => {
  render(<LoginForm />);

  const email = screen.getByLabelText("username");
  const password = screen.getByLabelText("password");
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();

  // fireEvent.change(email, { target: { value: "user@test.com" } });
  // fireEvent.change(password, { target: { value: "Test1234" } });
  userEvent.type(email, "user@test.com");
  userEvent.type(password, "Test1234");

  expect(button).toBeEnabled();
});

test("can't submit form when button is disabled", () => {
  const obSubmit = jest.fn();
  render(<LoginForm onSubmit={obSubmit} />);

  const button = screen.getByRole("button");

  // fireEvent.click(button);
  userEvent.click(button);

  expect(obSubmit).toHaveBeenCalledTimes(0);
});

test("submits form when button is clicked", () => {
  const obSubmit = jest.fn();
  render(<LoginForm onSubmit={obSubmit} />);

  const email = screen.getByLabelText("username");
  const password = screen.getByLabelText("password");
  const button = screen.getByRole("button");

  // fireEvent.change(email, { target: { value: "user@test.com" } });
  // fireEvent.change(password, { target: { value: "Test1234" } });
  // fireEvent.click(button);

  userEvent.type(email, "user@test.com");
  userEvent.type(password, "Test1234");
  userEvent.click(button);

  expect(obSubmit).toHaveBeenCalledTimes(1);
});
