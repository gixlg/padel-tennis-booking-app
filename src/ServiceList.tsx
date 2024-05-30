import {useServices} from "./Services.hook";
import {ServiceOption} from "./ServiceOption";

export type Service =  {
    name: string,
    id: string,
    value: number,
    description: string,
};

export type Services = Service[];

export function ServiceList({sport}: { sport: string }) {
    const {
        services,
        total,
        onChange
    } = useServices(sport);

    return <div data-testid="service-list">
        {
            services.map(service =>
                <ServiceOption key={service.name} service={service} onChange={onChange}/>
            )
        }
        <p>Total is: {total}</p>
    </div>
}
