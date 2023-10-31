
import Counter from "./Counter"
import { fireEvent, render, screen } from "@testing-library/react"


describe("counter", () =>{
    test("harus ada component counter",()=>{
        render (<Counter/>)
    
        expect(screen.getByText("-")).toBeInTheDocument()
        expect(screen.getByText("0")).toBeInTheDocument()
        expect(screen.getByText("+")).toBeInTheDocument()
    })
    test("angka berkurang  ketika decrement",()=>{
        render (<Counter/>)
        let btnDecrement = screen.getByText("-");
        let countNumber = screen.getByText("0");

        expect(countNumber.textContent).toBe("0");
        fireEvent.click(btnDecrement);
        expect(countNumber.textContent).toBe("-1");
        

    })
})
