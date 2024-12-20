import { getVehicles } from "@/server/vehicles/getVehicles";
import { Suspense } from "react";

import VehicleFiltering from "@/components/main/VehicleFiltering";
import VehicleGrid from "@/components/main/VehicleGrid";
import Loader from "@/components/Loader";

const page = () => {
    return (
        <Suspense
            fallback={
                <div className='w-screen h-screen flex items-center justify-center'>
                    <Loader />
                </div>
            }
        >
            <MainContent />
        </Suspense>
    );
};

const MainContent = async () => {
    const vehiclesData = await getVehicles();

    if (
        !vehiclesData ||
        !vehiclesData.Results ||
        vehiclesData.Results.length <= 0
    ) {
        return (
            <main className='min-h-screen w-full h-full'>
                <p>No vehicles found 😒</p>
            </main>
        );
    }

    return (
        <main className='min-h-screen w-full h-full px-5 overflow-x-hidden'>
            <h2 className='text-5xl font-bold font text-white text-center mt-4 mb-16'>
                Filter vehicles
            </h2>
            <VehicleFiltering vehicles={vehiclesData.Results} />
            <VehicleGrid vehicles={vehiclesData.Results} />
        </main>
    );
};

export default page;
