import { BarChart3 } from "lucide-react";

import { useState, useEffect } from "react";

import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";

export function GetAttendance({ dataPerPage = 3 }) {
    const [attendanceData, setAttendanceData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        const fetchAttendanceData = async (page) => {
            try {
                const response = await fetch(
                    `http://localhost:4000/attendance?_sort=-id&_page=${page}&_per_page=${dataPerPage}`
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                setAttendanceData(data.data);
                setTotalPages(data.pages); // Update total pages
            } catch (error) {
                console.error("Error fetching attendance data:", error);
                // Handle errors gracefully, e.g., display an error message to the user
            }
        };

        fetchAttendanceData(currentPage); // Fetch data initially
    }, [currentPage, dataPerPage]); // Update on page change or data per page change

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getVisiblePages = () => {
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);
        return Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
        );
    };

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
            {totalPages > 1 && ( // Only render pagination if more than one page
                // <div className="">
                <tr class="mt-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4 w-full" colSpan={9}>
                        <nav
                            aria-label="Page navigation example "
                            className=" grid place-items-center justify-items-center"
                        >
                            <ul class="flex items-center  -space-x-px h-10 text-base">
                                <li>
                                    <button
                                        class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        onClick={handlePreviousPage}
                                        disabled={currentPage === 1}
                                    >
                                        <span class="sr-only">Previous</span>
                                        <svg
                                            class="w-3 h-3 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 1 1 5l4 4"
                                            />
                                        </svg>
                                    </button>
                                </li>

                                {getVisiblePages().map((page) => (
                                    // <button
                                    //     key={page}
                                    //     onClick={() => setCurrentPage(page)}
                                    //     className={`px-2 py-1 text-xs font-medium text-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-gray-400 ${
                                    //         currentPage === page
                                    //             ? "bg-indigo-500 text-white"
                                    //             : ""
                                    //     }`}
                                    // >
                                    //     {page}
                                    // </button>
                                    <li>
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            class={` flex flex-row items-center justify-center px-4 h-10 leading-tight 
                                        ${
                                            currentPage === page
                                                ? "z-10  text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        }
                                        
                                        `}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                ))}

                                <li>
                                    <button
                                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                    >
                                        <span class="sr-only">Next</span>
                                        <svg
                                            class="w-3 h-3 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 9 4-4-4-4"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        {/* Add base class for pagination */}
                        {/* {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-2 py-1 text-xs font-medium text-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-gray-400 ${
                                    currentPage === page
                                        ? "bg-indigo-500 text-white"
                                        : ""
                                }`}
                            >
                                {page}
                            </button>
                        )
                    )} */}
                    </td>
                </tr>
                // </div>
            )}
        </>
    );
}

export function AttendanceListSection() {
    return (
        <div className="p-4  overflow-hidden">
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
                                Break In
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Break Out
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Check Out
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
