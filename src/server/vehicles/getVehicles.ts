const serverLink = process.env.GET_MAKES_FOR_VEHICLE_TYPE_LINK;

export async function getVehicles() {
    if (!serverLink) {
        throw new Error("Link to the server is not found");
    }

    try {
        const data = await fetch(serverLink);
        const results = await data.json();

        return results;
    } catch (error) {
        throw new Error(`${error}`);
    }
}
