import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {SportSelection} from "./SportSelection";

describe("Sport Selection", () => {

    it("should show combo box", () => {
        render(<SportSelection/>);

        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })

    it("should show button", () => {
        render(<SportSelection/>);

        expect(screen.getByRole("button", {name: "Select"})).toBeInTheDocument();
    })

    it("should show ONLY selected entry after clicking on the button", async () => {
        render(<SportSelection/>);

        fireEvent.click(screen.getByRole("button", {name: "Select"}));

        expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
        expect(screen.queryByRole("button", {name: "Select"})).not.toBeInTheDocument();
        //expect(screen.getByText("Selected value: padle")).toBeInTheDocument();

        expect(screen.getByTestId("service-list")).toBeInTheDocument();
    })
})
