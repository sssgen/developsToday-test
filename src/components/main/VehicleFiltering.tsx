"use client";

import { useState } from "react";
import type Vehicle from "@/types/vehicle";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Link from "next/link";

const VehicleFiltering = ({ vehicles }: { vehicles: Vehicle[] }) => {
    const router = useRouter();

    // ??? we cant use makeId as an option for fetching (because 200 unique IDs is not good for UX/UI),
    // we can fetch data with makeName and makeYear, but the provided link for fetching is not correct
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMake(e.target.value);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (router) {
            router.push(
                `/result/${selectedMake.toLowerCase()}/${selectedYear.toLowerCase()}`
            );
        }
    };

    const makes = getRangeOfMakes(vehicles);
    const years = getRangeOfYears();

    return (
        <div className='w-full h-full flex items-center justify-center mb-16'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-row justify-center items-center my-4 gap-4'
            >
                <div className='flex flex-row justify-center items-center gap-4 w-full'>
                    <select
                        value={selectedMake}
                        onChange={handleMakeChange}
                        className='text-black max-w-1/2 h-8 px-2 form-select block w-full border-black-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    >
                        <option value=''>Choose an option</option>
                        {makes.map((make, index) => (
                            <option
                                key={index}
                                value={make}
                                className='text-left'
                            >
                                {make.charAt(0).toUpperCase() +
                                    make.slice(1).toLowerCase()}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        className='text-black max-w-1/2 h-8 px-2 form-select block w-full border-black-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    >
                        <option value=''>Choose an option</option>
                        {years.map((year, index) => (
                            <option
                                key={index}
                                value={year}
                                className='text-left'
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                {!selectedYear || !selectedMake ? (
                    <Button
                        disabled
                        className='opacity-50 cursor-not-allowed bg-black py-2 px-4 select-none'
                    >
                        Next
                    </Button>
                ) : (
                    <Link
                        href={`/result/${selectedMake.toLowerCase()}/${selectedYear.toLowerCase()}`}
                        className='bg-black py-2 px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                    >
                        Next
                    </Link>
                )}
            </form>
        </div>
    );
};

export default VehicleFiltering;

function getRangeOfYears() {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 2015 + 1 },
        (_, i) => 2015 + i
    );

    return years;
}

function getRangeOfMakes(vehicles: Vehicle[]) {
    const makes = [...new Set(vehicles.map((vehicle) => vehicle.MakeName))];

    return makes;
}
