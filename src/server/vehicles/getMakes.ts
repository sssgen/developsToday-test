import type { Vehicle } from "@/types/vehicle";

const url = process.env.GET_MAKES_BY_MAKEID_AND_YEAR || "";

export async function getMakes(
    makeId: string,
    makeYear: string
): Promise<Vehicle[]> {
    try {
        if (!url) {
            throw new Error("URL is not defined");
        }

        const fetchUrl = url
            .replace("**makeId**", makeId)
            .replace("**makeYear**", makeYear);

        const response = await fetch(fetchUrl);
        const data = await response.json();

        return data.Results;
    } catch (error) {
        console.error("Some error occurred:", error);
        throw new Error("Error fetching vehicles");
    }
}
