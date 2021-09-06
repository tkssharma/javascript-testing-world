import { Count } from "../counterHook";
import { act, renderHook } from "@testing-library/react-hooks";

describe("testing react hook", () => {

  it("testing react hook", () => {
    const { result } = renderHook(Count)
    console.log(result);
    act(() => result.current.add());
    expect(result.current.counter).toBe(1)

    act(() => result.current.remove());
    expect(result.current.counter).toBe(0)
  })

  it("testing react hook", () => {
    const { result } = renderHook(Count)

    act(() => result.current.remove());
    expect(result.current.counter).toBe(-1)
  })

})