import React from 'react';
import Body from '../Body';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("This suit is to test the Body component", ()=>{
    test('Snapshot of Body', () => {
        const {asFragment} = render(<Body title="hello world"/>);
        expect(asFragment()).toMatchSnapshot()
    });   
    
    test("finding title", ()=>{
        const {getByText} = render(<Body title="Jay Rocks"/>);
        expect(getByText("Jay Rocks")).toBeInTheDocument("Jay Rocks")
    })

    test("finding title with TestId", ()=>{
        const {getByTestId} = render(<Body title="Jay Rocks"/>);
        expect(getByTestId("header")).toHaveTextContent("Jay Roc")
        //exact match
        expect(getByTestId("header")).toHaveTextContent(/^Jay Rocks$/)
      })

      test("check Counter initial value", ()=>{
        const {getByTestId} = render(<Body title="Jay Rocks"/>);
        expect(getByTestId("counter")).toHaveTextContent("0")
      })

      test("check Counter value after a tap", ()=>{
        const {getByTestId} = render(<Body title="I Love Kavinie"/>);
        const button = getByTestId("button");
        userEvent.click(button)
        expect(getByTestId("counter")).toHaveTextContent("1")
      })

      test("check Counter value after tapping twice", ()=>{
        const {getByTestId} = render(<Body title="Jay Rocks"/>);
        const button = getByTestId("button");
        userEvent.click(button)
        userEvent.click(button)
        expect(getByTestId("counter")).toHaveTextContent("2")
      })
})