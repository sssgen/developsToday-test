import VehicleGrid from "@/components/main/VehicleGrid";
import type { Vehicle } from "@/types/vehicle";
import { getMakes } from "@/server/vehicles/getMakes";

export default async function Page({
    params,
}: {
    params: { makeId: string; makeYear: string };
}) {
    const { makeId, makeYear } = params;

    const vehicles: Vehicle[] = await getMakes(makeId, makeYear);

    switch (true) {
        case vehicles && vehicles.length > 0:
            return (
                <>
                    <h2 className='text-5xl font-bold font text-white text-center mt-4'>
                        Found vehicles
                    </h2>
                    <VehicleGrid vehicles={vehicles} />
                </>
            );
        case vehicles && vehicles.length === 0:
            return <p className='text-center'>No vehicles found...</p>;
        default:
            return <p className='text-center'>Error fetching vehicles...</p>;
    }
}
