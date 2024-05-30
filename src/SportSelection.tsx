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
            <select ref={ref} name="country">
                <option value="padle">Padel</option>
                <option value="tennis">Tennis</option>
            </select>
            <button onClick={onClick}>Select</button>
        </>)}
        {selected && (<ServiceList sport={selected} />)}
    </>;
}
