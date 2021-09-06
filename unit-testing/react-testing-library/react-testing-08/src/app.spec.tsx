import React from "react";
import { waitFor } from "@testing-library/dom";

import {
  render,
  cleanup,
  getByAltText,
  screen,
  getByText,
  queryByText,
  act,
  waitForElementToBeRemoved
} from "@testing-library/react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import PostApp from "./App";


const posts = [
  {
    title: "test"
  },
  {
    title: "test1"
  },
  {
    title: "test2"
  }
];
beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: { data: posts } }));
});
afterEach(cleanup);
describe("GifGenerator", () => {
  it("displays text “…Loading” while fetching gifs", () => {
    const { getByText } = render(<PostApp />);

    getByText("…Loading");
  });

  it("displays text", async () => {
    await act(async () => {
      const { getByText, findByText, queryByText } = render(<PostApp />);
      expect(getByText("…Loading")).toBeDefined();
      expect(await findByText("…Loading")).toBeDefined();
      // await waitForElementToBeRemoved(() => getByText("…Loading"));
      await waitForElementToBeRemoved(() => queryByText("…Loading"));
    });
  });

  it("displays post data after fetch", async () => {
    await act(async () => {
      const { getByText, findByText } = render(<PostApp />);
      await waitForElementToBeRemoved(() => getByText("…Loading"));
      expect(getByText("test")).toBeDefined();
    });
  });
});
