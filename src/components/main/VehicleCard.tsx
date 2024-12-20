import type Vehicle from "@/types/vehicle";

const VehicleCard = ({
    MakeId,
    MakeName,
    MakeYear,
    VehicleTypeId,
    VehicleTypeName,
}: Vehicle) => {
    return (
        <div
            key={MakeId}
            className='bg-white rounded-lg shadow p-4 max-w-[400px] min-h-[200px] w-full border border-gray-300'
        >
            <h3 className='text-2xl font-bold text-gray-900'>
                {MakeName.charAt(0).toUpperCase() +
                    MakeName.slice(1).toLowerCase()}
            </h3>
            <p className='text-gray-900 ml-2'>{MakeYear}</p>
            <ul className='p-0 border-box mt-4 ml-4'>
                <li className='text-gray-900'>
                    <span className='font-bold'>Make ID:</span> {MakeId}
                </li>
                <li className='text-gray-900'>
                    <span className='font-bold'>Vehicle ID:</span>{" "}
                    {VehicleTypeId}
                </li>
                <li className='text-gray-900'>
                    <span className='font-bold'>Vehicle type name:</span>{" "}
                    {VehicleTypeName}
                </li>
            </ul>
        </div>
    );
};

export default VehicleCard;
