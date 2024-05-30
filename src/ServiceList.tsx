import {useServices} from "./Services.hook";

type Service =  {
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
