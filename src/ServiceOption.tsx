import {Service} from "./ServiceList";

export function ServiceOption(props: { service: Service, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <div key={props.service.name} className="field">
        <div className="control">
            <label className="checkbox">
                <input type="checkbox"
                       name={props.service.name}
                       className="mr-1"
                       value={props.service.value}
                       onChange={props.onChange}/>
                {props.service.name}
            </label>
            <p>{props.service.description}</p>
        </div>
    </div>;
}
