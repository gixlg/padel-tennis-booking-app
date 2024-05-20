import {fireEvent, render, screen} from "@testing-library/react";
import React, {useRef, useState} from "react";

function SportSelection() {
    const ref = useRef<HTMLSelectElement>(null);
    const [selected, setSelected] = useState<string | undefined>(undefined)

    const onClick = () => {
        const selectedValue = ref?.current?.selectedOptions[0].value
        setSelected(selectedValue || "");
    }

    return <>
        {!selected && (<>
            <select ref={ref} name="country">
                <option value="padle">Padel</option>
                <option value="tennis">Tennis</option>
            </select>
            <button onClick={onClick}>Select</button>
        </>)}
        {selected && (<p>Selected value: {selected}</p>)}
    </>;
}

describe("Sport Selection", () => {

    it("should show combo box", () => {
        render(<SportSelection/>);

        expect(screen.getByRole("combobox")).toBeInTheDocument();
    })

    it("should show button", () => {
        render(<SportSelection/>);

        expect(screen.getByRole("button", {name: "Select"})).toBeInTheDocument();
    })

    it("should show ONLY selected entry after clicking on the button", () => {
        render(<SportSelection/>);

        fireEvent.click(screen.getByRole("button", {name: "Select"}));

        expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
        expect(screen.queryByRole("button", {name: "Select"})).not.toBeInTheDocument();
        expect(screen.getByText("Selected value: padle")).toBeInTheDocument();
    })
})
