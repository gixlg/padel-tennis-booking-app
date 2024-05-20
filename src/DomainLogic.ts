import {jest} from "@jest/globals";

export const fetchServices = async (sport: string)=> {
    const responsePromise = await fetch(`/sports/${sport}/services.json`);
    let responseData = await responsePromise.json();
    return responseData.filter((e: any)=> e.available === undefined || e.available);
}
