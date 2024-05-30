import {ChangeEvent, useEffect, useState} from "react";
import {fetchServices} from "./DomainLogic";
import {Services} from "./ServiceList";

export function useServices(sport: string) {
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

    return {
        services,
        total,
        onChange
    }
}
