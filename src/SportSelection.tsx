import React, {useRef, useState} from "react";
import {ServiceList} from "./ServiceList";

export function SportSelection() {
    const ref = useRef<HTMLSelectElement>(null);
    const [selected, setSelected] = useState<string | undefined>(undefined)

    const onClick = () => {
        const selectedValue = ref?.current?.selectedOptions[0].value
        setSelected(selectedValue || "");
    }

    return <>
        {!selected && (<>

            <div className="field">
                <label className="label">Select your preferred sport</label>
                <div className="control">
                    <div className="select">
                        <select ref={ref}>
                            <option value="padle">Padel</option>
                            <option value="tennis">Tennis</option>
                        </select>
                    </div>
                </div>
            </div>


            <button className="button is-link" onClick={onClick}>Select</button>
        </>)}
        {selected && (<ServiceList sport={selected}/>)}
    </>;
}
