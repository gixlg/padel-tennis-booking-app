import {fireEvent, render, screen} from "@testing-library/react";

type Service =  {
    name: string,
    id: string,
    value: number,
    description: string,
};

type Services = Service[];

function ServiceList({services}: {services: Services}) {
    return <>
        {
            services.map(s =>
                <div key={s.name}>
                    <p>{s.description}</p>
                    <label>
                        <input
                            type="checkbox"
                            name={s.name}
                            value={s.value}
                        />
                        {s.name}
                    </label>
                </div>
            )
        }
    </>
}

describe("Service List", () => {
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

    it("Should render multiple checkbox", () => {
        render(<ServiceList services={services}/>)

        expect(screen.getAllByRole("checkbox")).toHaveLength(2);
        expect(screen.getByText("An Amazing Field")).toBeInTheDocument();
        expect(screen.getByText("An good Shower")).toBeInTheDocument();
    })

    it("Should compute the cost", () => {

        render(<ServiceList services={services}/>)

        fireEvent.click(screen.getByRole("checkbox", {name: /Shower/i}));
        expect(screen.getByRole("checkbox", {name: /Shower/i})).toBeChecked();
        expect(screen.getByText(/5/i)).toBeInTheDocument();

    })
})
