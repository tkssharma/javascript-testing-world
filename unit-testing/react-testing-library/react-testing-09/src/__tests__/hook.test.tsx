// useUppercase.test.ts
import { useUppercase } from "../hook";
import { act, renderHook } from "@testing-library/react-hooks";

// ...

describe("when called the `update` method", () => {
  it("changes the `value` and uppercases it", () => {
    const { result } = renderHook(() => useUppercase("Test string"));

    act(() => result.current.update("Updated"));
    expect(result.current.value).toEqual("UPDATED");
  });
});
describe("when re-rendered with another initial value", () => {
  it("updates the value", () => {
    const { result, rerender } = renderHook(({ text }) => useUppercase(text), {
      initialProps: { text: "Test String" }
    });

    rerender({ text: "Updated!" });
    expect(result.current.value).toEqual("UPDATED!");
  });
});
