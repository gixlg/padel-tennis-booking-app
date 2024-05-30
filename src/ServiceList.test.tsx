import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import * as domainLogic from "./DomainLogic";
import {ServiceList} from "./ServiceList";

describe("Service List", () => {
    beforeEach(()=>{
        const services = [
            {
                name: "Field",
                id: "field",
                value: 30,
                description: "An Amazing Field",
            },
            {
                name: "Shower",
                id: "shower",
                value: 5,
                description: "An good Shower",
            }
        ]
        jest.spyOn(domainLogic, `fetchServices`).mockResolvedValue(services)
    })

    it("Should render multiple checkbox", async () => {
        render(<ServiceList sport="padle" />)

        await waitFor(() => {
            expect(screen.getAllByRole("checkbox")).toHaveLength(2)
        });

        expect(screen.getByText("An Amazing Field")).toBeInTheDocument();
        expect(screen.getByText("An good Shower")).toBeInTheDocument();
    })

    it("Should compute the cost", async () => {

        render(<ServiceList sport="padle" />)

        await waitFor(() => {
            expect(screen.getAllByRole("checkbox")).toHaveLength(2)
        });

        fireEvent.click(screen.getByRole("checkbox", {name: /Shower/i}));
        expect(screen.getByRole("checkbox", {name: /Shower/i})).toBeChecked()
        expect(screen.getByText(/5/i)).toBeInTheDocument()
    })

    it("Should compute the cost with multiple element selected", async () => {
        render(<ServiceList sport="padle" />)

        await waitFor(() => {
            expect(screen.getAllByRole("checkbox")).toHaveLength(2)
        });

        fireEvent.click(screen.getByRole("checkbox", {name: /Shower/i}));
        fireEvent.click(screen.getByRole("checkbox", {name: /Field/i}));
        expect(screen.getByText(/35/i)).toBeInTheDocument();
    })
})
