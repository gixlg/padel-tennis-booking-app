import {fireEvent, render, screen} from "@testing-library/react";
import {ChangeEvent, useState} from "react";

type Service =  {
    name: string,
    id: string,
    value: number,
    description: string,
};

type Services = Service[];

function ServiceList({services}: {services: Services}) {
    const [total, setTotal] = useState(0)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input: HTMLInputElement = event.target;
        setTotal((current) => input.checked ? current + Number(input.value) : current - Number(input.value))

    };

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
                            onChange={onChange}
                        />
                        {s.name}
                    </label>
                </div>
            )
        }
        <p>Total is: {total}</p>
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

    it("Should compute the cost with multiple element selected", () => {
        render(<ServiceList services={services}/>)

        fireEvent.click(screen.getByRole("checkbox", {name: /Shower/i}));
        fireEvent.click(screen.getByRole("checkbox", {name: /Field/i}));

        expect(screen.getByText(/35/i)).toBeInTheDocument();
    })
})
