import { render, screen} from "@testing-library/react";


function ServiceList() {
    return null;
}

describe("Service List", () => {
    it("Should render multiple checkbox", () => {
        render(<ServiceList/>)

        expect(screen.getAllByRole("checkbox")).toHaveLength(2);
    })
})
