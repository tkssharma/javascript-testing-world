import { Count } from "./hook";
import { act, renderHook } from "@testing-library/react-hooks";
import expect from "expect";

describe("Adding one", () => {
  it("Adds one to counter", () => {
    const { result } = renderHook(Count);
    act(() => {
      result.current.add();
    });
    expect(result.current.counter).toBe(1);
  });
  it("Removes one from counter", () => {
    const { result } = renderHook(Count);
    act(() => {
      result.current.remove();
    });
    expect(result.current.counter).toBe(-1);
  });
});
