import VehicleCard from "@/components/main/VehicleCard";

import type Vehicle from "@/types/vehicle";

export default async function Page({
    params,
}: {
    params: { make: string; makeYear: string };
}) {
    // we can fetch here because the page is async (server-side rendered)
    
    // const makeId = params.make;
    // const year = params.makeYear;
    // const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
    // const response = await fetch(url);
    // const data = await response.json();

    const resolvedParams = await params;

    const vehicle: Vehicle = {
        // ??? we cant use makeId as an option for fetching (because 200 unique IDs is not good for UX/UI),
        // we can fetch data with makeName and makeYear, but the provided link for fetching is not correct
        MakeId: -1,
        MakeName: resolvedParams.make,
        MakeYear: resolvedParams.makeYear,
        VehicleTypeId: -1,
        VehicleTypeName: "-1",
    };

    return (
        <div className='w-screen h-screen flex flex-col gap-8 justify-center items-center'>
            <VehicleCard {...vehicle} />
            <p className="text-2xl">
                We cant just use makeId as an option for fetching, because 200
                unique IDs is not good for UX/UI. <br />We can fetch data with
                makeName and makeYear, but the provided link for fetching is not
                correct
            </p>
        </div>
    );
}
