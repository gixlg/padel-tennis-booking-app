import {ChangeEvent, useEffect, useState} from "react";
import {fetchServices} from "./DomainLogic";

type Service =  {
    name: string,
    id: string,
    value: number,
    description: string,
};

type Services = Service[];

export function ServiceList({sport}: { sport: string }) {
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
