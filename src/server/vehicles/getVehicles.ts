import type Vehicle from "@/types/vehicle";
const serverLink = process.env.SERVER_LINK;

export async function getVehicles() {
    if (!serverLink) {
        throw new Error("Link to the server is not found");
    }

    try {
        const data = await fetch(serverLink);
        const results = await data.json();

        results.Results = results.Results.map((vehicle: Vehicle) => {
            return {
                ...vehicle,
                MakeYear: Math.floor(Math.random() * (new Date().getFullYear() - 2015 + 1)) + 2015,
            };
        });

        return results;
    } catch (error) {
        throw new Error(`${error}`);
    }
}
