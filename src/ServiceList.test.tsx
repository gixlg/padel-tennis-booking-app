/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {ChangeEvent, useEffect, useState} from "react";
import {fetchServices} from "./DomainLogic";
import * as domainLogic from "./DomainLogic";

type Service =  {
    name: string,
    id: string,
    value: number,
    description: string,
};

type Services = Service[];

function ServiceList({sport}: { sport: string }) {
    const [total, setTotal] = useState(0)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input: HTMLInputElement = event.target;
        setTotal((current) => input.checked ? current + Number(input.value) : current - Number(input.value))

    };

    const [services, setServices] = useState<Services>([]);

    useEffect(() => {
        fetchServices(sport)
            .then(setServices)
    }, []);

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
            expect(screen.getByText("An Amazing Field")).toBeInTheDocument();
            expect(screen.getByText("An good Shower")).toBeInTheDocument();
        });
    })

    it("Should compute the cost", async () => {

        render(<ServiceList sport="padle" />)

        await waitFor( ()=> {
            fireEvent.click(screen.getByRole("checkbox", {name: /Shower/i}));
            expect(screen.getByRole("checkbox", {name: /Shower/i})).toBeChecked()
            expect(screen.getByText(/5/i)).toBeInTheDocument()
        })
    })

    it("Should compute the cost with multiple element selected", async () => {
        render(<ServiceList sport="padle" />)

        await waitFor( ()=> {
            fireEvent.click(screen.getByRole("checkbox", {name: /Shower/i}));
            fireEvent.click(screen.getByRole("checkbox", {name: /Field/i}));
            expect(screen.getByText(/35/i)).toBeInTheDocument();
        });
    })
})
