import { fireEvent, render } from "@testing-library/react"
import { screen, getByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { Counter } from "../Components/Counter";


describe("Test Counter Component", () => {

    it("Button should be present onto the dom" , () => {
        render(<Counter />)
        const count = screen.getByTestId("counter_value");
        expect(count).toBeInTheDocument();
    });
    

    it("Check if default value is 0", () => {
        render(<Counter />)
        const counter = screen.getByTestId("counter_value");
        expect(counter).toHaveTextContent("Counter: 0")
    });

    // it("button is working fine" , () => {
    //     const mocFun = jest.fn()
    //     render(<Counter handleClick={mocFun} />)
    //     const button = screen.getByTestId("add_value");
    //     userEvent.click(button)
    //     expect(mocFun).toBeCalledTimes(1)
    // })

    it("Counter should increase on click", ()=> {
        render(<Counter />)
        const button = screen.getByTestId("add_value");
        const counter = screen.getByTestId("counter_value");
        expect(counter).toHaveTextContent("Counter: 0");

        fireEvent.click(button);

        expect(counter).toHaveTextContent("Counter: 5")
    });

    
    it("Counter should Decrease on click", ()=> {
        render(<Counter />)
        const button = screen.getByTestId("reduce_value");
        const counter = screen.getByTestId("counter_value");
        expect(counter).toHaveTextContent("Counter: 0");

        fireEvent.click(button);

        expect(counter).toHaveTextContent("Counter: -5")
    });

})