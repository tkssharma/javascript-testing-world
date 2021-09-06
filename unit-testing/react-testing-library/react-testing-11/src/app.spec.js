import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  waitForElement,
  fireEvent,
  screen,
  cleanup
} from "@testing-library/react";
import App from "./app";

const axiosMock = {
  get: jest.fn()
};

const mockTodos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }
];

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should have called the API and rendered the first message correctly", async () => {
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockTodos })
    );

    const { getByTestId } = render(<App axiosClient={axiosMock} />);
    const messageList = await waitForElement(() => getByTestId("message-list"));
    const firstTodoParagraph = await waitForElement(() =>
      getByTestId("todo-paragraph-1")
    );

    expect(messageList).toBeDefined();
    expect(axiosMock.get).toBeCalledTimes(1);
    expect(firstTodoParagraph).toHaveTextContent(mockTodos[0].title);
  });

  it("should have called the API three times when clicked two times on Renew", async () => {
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockTodos })
    );

    render(<App axiosClient={axiosMock} />);
    fireEvent.click(screen.getByText("Renew"));
    fireEvent.click(screen.getByText("Renew"));

    expect(axiosMock.get).toBeCalledTimes(3);
  });
});
