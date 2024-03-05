import { BarChart3 } from "lucide-react";

import { useState, useEffect } from "react";

import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";

export function GetAttendance() {
    const [attendanceData, setAttendanceData] = useState(null); // Use `attendanceData` for clarity

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:4000/attendance"
                ); // Use await for cleaner syntax

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setAttendanceData(data);
            } catch (error) {
                console.error("Error fetching attendance data:", error);
                // Handle errors gracefully, e.g., display an error message to the user
            }
        };

        fetchAttendanceData(); // Call the function to fetch data
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <>
            {attendanceData && (
                <tbody>
                    {attendanceData.map((employee) => (
                        <tr
                            key={employee.id}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td class="px-6 py-4  w-14">
                                <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                    <img
                                        src={`https://picsum.photos/id/${employee.id}/200/300`}
                                    ></img>

                                    {/* <Image
                                        className=""
                                        width={40}
                                        height={40}
                                        src={'avatar'}
                                    ></Image> */}
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                <div class="ps-3">
                                    <div class="text-base font-semibold">
                                        {employee.name}
                                    </div>
                                    <div class="font-normal text-gray-500">
                                        {employee.checkIn}
                                    </div>
                                </div>
                            </th>
                            <td class="px-6 py-4">{employee.position}</td>
                            <td class="px-6 py-4">{employee.date}</td>
                            <td class="px-6 py-4">{employee.checkIn}</td>
                            <td class="px-6 py-4">{employee.breakIn}</td>
                            <td class="px-6 py-4">{employee.breakOut}</td>
                            <td class="px-6 py-4">{employee.checkOut}</td>
                            <td class="px-6 py-4">
                                {employee.workingHour} Hours
                            </td>
                        </tr>
                    ))}
                </tbody>
            )}
        </>
    );
}

export function AttendanceListSection() {
    return (
        <div className="p-4">
            <div className="  flex-1 font-semibold text-xl">
                Daily Attendance List
            </div>
            <div className=" w-full h-full overflow-hidden my-4 rounded-2xl flex flex-row items-center border border-3 shadow-xl">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 w-14">
                                Profile
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Check In
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Check Out
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Break In
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Break Out
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Working Hours
                            </th>
                        </tr>
                    </thead>
                    <GetAttendance />
                </table>
            </div>
        </div>
    );
}
