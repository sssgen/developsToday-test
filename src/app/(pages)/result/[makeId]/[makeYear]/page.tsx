import VehicleGrid from "@/components/main/VehicleGrid";
import type { Vehicle } from "@/types/vehicle";
import { getMakes } from "@/server/vehicles/getMakes";
import Button from "@/components/Button";
import Link from "next/link";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default function Page({
    params,
}: {
    params: { makeId: string; makeYear: string };
}) {
    return (
        <Suspense
            fallback={
                <div className='w-screen h-screen flex items-center justify-center'>
                    <Loader />
                </div>
            }
        >
            <MainContent params={params} />
        </Suspense>
    );
}

const MainContent = async ({
    params,
}: {
    params: { makeId: string; makeYear: string };
}) => {
    const { makeId, makeYear } = params;

    const vehicles: Vehicle[] = await getMakes(makeId, makeYear);

    if (vehicles && vehicles.length > 0) {
        return (
            <main className="min-h-screen w-full h-full px-5 overflow-x-hidden">
                <Link href='/'>
                    <Button className="disabled:opacity-50 disabled:cursor-not-allowed bg-black py-2 px-4 select-none mt-4 ml-4">Back</Button>
                </Link>
                <h2 className='text-5xl font-bold font text-white text-center mt-4'>
                    Found vehicles
                </h2>
                <VehicleGrid vehicles={vehicles} />
            </main>
        );
    } else if (vehicles && vehicles.length === 0) {
        return <p className='text-center'>No vehicles found...</p>;
    } else {
        return <p className='text-center'>Error fetching vehicles...</p>;
    }
};
