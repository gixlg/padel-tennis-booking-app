import { render, screen} from "@testing-library/react";

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
                <input
                    key={s.name}
                    type="checkbox"
                    name={s.name}
                    value={s.value}
                />
            )
        }
    </>
}

describe("Service List", () => {
    it("Should render multiple checkbox", () => {
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

        render(<ServiceList services={services}/>)

        expect(screen.getAllByRole("checkbox")).toHaveLength(2);
    })
})
