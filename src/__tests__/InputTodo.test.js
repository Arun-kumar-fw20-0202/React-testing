import { render, screen } from "@testing-library/react"
import { InputTodo } from "../Components/InputTodo"

describe("Test input todo" , () => {

    it("Input should auto focused" , () => {
        render(<InputTodo />)
        const input = screen.getByTestId("todo-input");
        expect(input).toHaveFocus()
    })
    it("Default value should be *Katill_boyy*",()=> {
        render(<InputTodo />)
        const input = screen.getByTestId("todo-input")
        expect(input).toHaveValue("katill_boyy")
    })
})