import {render, screen} from "@testing-library/react";
import React from "react";

function SportSelection() {
    return null;
}

describe("Sport Selection", () => {

    it("should show combo box", () => {
        render(<SportSelection/>);

        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })

})
