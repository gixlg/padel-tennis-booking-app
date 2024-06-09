import {Service} from "./ServiceList";

export function ServiceOption(props: { service: Service, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <div>
        <p>{props.service.description}</p>
        <label>
            <input
                type="checkbox"
                name={props.service.name}
                value={props.service.value}
                onChange={props.onChange}
            />
            {props.service.name}
        </label>
    </div>;
}
