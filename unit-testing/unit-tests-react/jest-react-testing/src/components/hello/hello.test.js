import React from 'react';
import Hello from './hello'
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Testing Hello Component", () => {
  it("finding title", () => {
    const {getByText} = render(<Hello title="tkssharma"/>)
    expect(getByText("tkssharma")).toBeInTheDocument("tkssharma")
  })

  it("finding title with testId", () => {
    const {getByTestId} = render(<Hello title="tkssharma"/>)
    expect(getByTestId("title")).toHaveTextContent("tkssharma");
    expect(getByTestId("title")).toHaveTextContent(/^tkssharma$/);
  })
  it("finding title with testId", () => {
    const {getByTestId} = render(<Hello title="tkssharma"/>)
    expect(getByTestId("count")).toHaveTextContent("0");
  })

  it("check counter value after click ", () => {
    const {getByTestId} = render(<Hello title="tkssharma"/>)
    const button = getByTestId("button");
    userEvent.click(button);
    expect(getByTestId("count")).toHaveTextContent("1");
  })

  it("check counter value after multiple click ", () => {
    const {getByTestId} = render(<Hello title="tkssharma"/>)
    const button = getByTestId("button");
    userEvent.click(button);
    userEvent.click(button);
    expect(getByTestId("count")).toHaveTextContent("2");
  })

})