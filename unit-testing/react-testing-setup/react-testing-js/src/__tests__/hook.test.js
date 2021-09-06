import { useUppercase } from '../hook';
import { renderHook, act } from '@testing-library/react-hooks';


describe("testing react hook", () => {

  it("testing react hook", () => {
    const { result } = renderHook(() => useUppercase("Test String"))
    console.log(result);
    act(() => result.current.update("Updated"));
    expect(result.current.value).toEqual("UPDATED")
  })

  it("testing react hook with re-rendering", () => {
    const { result, rerender } = renderHook(
      ({ text }) => useUppercase(text),
      { initialProps: { text: "Test String" } })

    rerender({ text: "Updated!" })
    expect(result.current.value).toEqual("UPDATED!")
  })

})