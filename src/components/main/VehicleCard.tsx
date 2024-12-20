import type { Vehicle, MakesByMakeId } from "@/types/vehicle";

interface Props {
    data: Vehicle | MakesByMakeId;
}

const VehicleCard = ({ data }: Props) => {
    const isVehicle = "MakeId" in data;
    
    const { MakeId, MakeName, MakeYear, VehicleTypeId, VehicleTypeName } = data as Vehicle;
    const { Make_ID, Make_Name, Model_ID, Model_Name } = data as MakesByMakeId;

    return (
        <div
            key={isVehicle ? MakeId : Make_ID}
            className='bg-white rounded-lg shadow p-4 max-w-[400px] min-h-[200px] w-full border border-gray-300'
        >
            <h3 className='text-2xl font-bold text-gray-900'>
                {isVehicle
                    ? MakeName.charAt(0).toUpperCase() +
                      MakeName.slice(1).toLowerCase()
                    : Make_Name.charAt(0).toUpperCase() +
                      Make_Name.slice(1).toLowerCase()}
            </h3>
            <p className='text-gray-900 ml-2'>
                {isVehicle ? MakeYear : Model_Name}
            </p>
            <ul className='p-0 border-box mt-4 ml-4'>
                <li className='text-gray-900'>
                    <span className='font-bold'>Make ID:</span>{" "}
                    {isVehicle ? MakeId : Make_ID}
                </li>
                <li className='text-gray-900'>
                    <span className='font-bold'>Vehicle ID:</span>{" "}
                    {isVehicle ? VehicleTypeId : Model_ID}
                </li>
                <li className='text-gray-900'>
                    <span className='font-bold'>Vehicle type name:</span>{" "}
                    {isVehicle ? VehicleTypeName : Model_Name}
                </li>
            </ul>
        </div>
    );
};

export default VehicleCard;
