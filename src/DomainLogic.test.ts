import {jest} from "@jest/globals";

export const fetchServices = async (sport: string)=> {
    return null
}

describe("Domain logic", () => {

    it('should fetch services', async () => {
        beforeEach(()=>{
            const mockResponse = [
                {
                    name: "A service not available",
                    id: "a-service-not-available",
                    value: 30,
                    description: "A description for a service not available",
                    available: false
                },
                {
                    name: "Field",
                    id: "field",
                    value: 30,
                    description: "An Amazing Field",
                },
                {
                    name: "Shower",
                    id: "shower",
                    value: 5,
                    description: "An good Shower",
                }
            ];
            jest.spyOn(global, `fetch`).mockResolvedValue({
                status: 200,
                json: () => Promise.resolve(mockResponse),
            } as Response);

        })
        const actual = await fetchServices("padle");

        const expected = [
            {
                name: "Field",
                id: "field",
                value: 30,
                description: "An Amazing Field",
            },
            {
                name: "Shower",
                id: "shower",
                value: 5,
                description: "An good Shower",
            }
        ]
        expect(actual).toStrictEqual(expected)
    });
})
