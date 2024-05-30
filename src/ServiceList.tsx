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
        <div className="columns">
            <div className="column">
                <h5 className="title is-5">Your selection</h5>
                {
                    services.map(service =>
                        <ServiceOption key={service.name} service={service} onChange={onChange}/>
                    )
                }
            </div>
            <div className="column">
                <h3 className="title is-3">Your order</h3>
                <p>Total is: {total}</p>
            </div>
        </div>
    </div>
}
