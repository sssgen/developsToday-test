import type { Vehicle } from "@/types/vehicle";
import VehicleCard from "./VehicleCard";

const VehicleGrid = ({ vehicles }: { vehicles: Vehicle[] }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center py-24'>
            {vehicles.map((vehicle: Vehicle) => (
                <VehicleCard key={vehicle.MakeId} {...vehicle} data={vehicle} />
            ))}
        </div>
    );
};

export default VehicleGrid;
