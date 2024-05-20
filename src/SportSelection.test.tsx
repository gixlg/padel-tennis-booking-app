import {render, screen} from "@testing-library/react";
import React from "react";

function SportSelection() {
    return <>
        <select name="country">
            <option value="padle">Padel</option>
            <option value="tennis">Tennis</option>
        </select>
    </>;
}

describe("Sport Selection", () => {

    it("should show combo box", () => {
        render(<SportSelection/>);

        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })

})
