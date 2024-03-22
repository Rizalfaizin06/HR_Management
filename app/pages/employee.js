"use client";
import {
    BarChart3,
    ChevronRight,
    Images,
    PencilLine,
    Trash2,
} from "lucide-react";
import Button from "@mui/material/Button";

import SideBar, { SidebarItem } from "../component/sidebar";
import { useContext, createContext, useState, useEffect } from "react";
import { ContentContext } from "../page";
import MyChart from "../component/chart-employee";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import logo from "../../assets/images/LogoBuana.png";
import EmployeeCard from "../component/employee-card";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmployePage({ dataPerPage = 6 }) {
    const [employeeData, setEmployeeData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); // Use `employeeData` for clarity
    const [totalItems, setTotalItems] = useState(0); // Use `employeeData` for clarity
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk membuka/menutup popup
    const [formData, setFormData] = useState({
        // Define initial state for form data
        avatar: "-",
        name: "-",
        departement: "-",
        posistion: "-",
        domicile: "-",
        email: "-",
        status: true,
    });

    // const addEmployee = async () => {
    //     try {
    //         const response = await fetch(
    //             "http://localhost:4000/employee?_page=1&_per_page=1"
    //         );

    //         if (!response.ok) {
    //             // Check for successful response
    //             throw new Error(
    //                 `API request failed with status ${response.status}`
    //             );
    //         }

    //         const data = await response.json();

    //         setTotalItems(data.items);
    //         console.log(totalItems);

    //         setFormData({ ...formData, id: totalItems });
    //         console.log("tessss:", formData);

    //         const add = await submitAddEmployee();
    //         // submitAddEmployee();
    //     } catch (error) {
    //         // Handle errors appropriately (e.g., display error message to user)
    //         console.error("Error posting data:", error);
    //     }
    // };
    const addEmployee = async () => {
        try {
            const response = await fetch("http://localhost:4000/employee", {
                // Fetch using async/await
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Set content type correctly
                },
                body: JSON.stringify(formData), // Stringify data before sending
            });

            if (!response.ok) {
                // Check for successful response
                throw new Error(
                    `API request failed with status ${response.status}`
                );
            }

            // Handle successful response (e.g., display success message)
            setFormData({
                // Define initial state for form data
                avatar: "-",
                name: "-",
                departement: "-",
                posistion: "-",
                domicile: "-",
                email: "-",
                status: true,
            });
            // fetchEmpployee();
            setIsPopupOpen(false);

            console.log("Data posted successfully:", await response.json());
        } catch (error) {
            // Handle errors appropriately (e.g., display error message to user)
            console.error("Error posting data:", error);
        }
    };

    const isButtonDisabled = () => {
        false;
        // return formData.name === "-" || formData.name === "";
    };

    // addEmployee();

    useEffect(() => {
        const fetchEmployeeData = async (page) => {
            try {
                const response = await fetch(
                    `http://localhost:4000/employee?_sort=-id&_page=${page}&_per_page=${dataPerPage}`
                ); // Use await for cleaner syntax

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setEmployeeData(data.data);
                setTotalPages(data.pages); // Update total pages
            } catch (error) {
                console.error("Error fetching employee   data:", error);
                // Handle errors gracefully, e.g., display an error message to the user
            }
        };

        fetchEmployeeData(currentPage); // Call the function to fetch data
    }, [currentPage, dataPerPage]);
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

    const startNumber = () => {
        currentPage * dataPerPage;
    };

    // addEmployee();

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row items-center p-3 justify-between border-b shadow-md">
                <div className="flex flex-row justify-between w-full gap-5  ">
                    <div className="flex flex-row justify-start w-full gap-5  ">
                        <form>
                            <label
                                for="search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>

                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="search"
                                    class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Employee"
                                    required
                                />
                            </div>
                        </form>
                        <form class=" ">
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a Departement</option>
                                <option value="ME">ME-KANIK</option>
                                <option value="ME">ME-KANIK</option>
                                <option value="ME">ME-KANIK</option>
                            </select>
                        </form>

                        <form class=" ">
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a position</option>
                                <option value="FR">Manager</option>
                                <option value="FR">HR</option>
                                <option value="FR">Junior</option>
                                <option value="FR">Senior</option>
                            </select>
                        </form>
                        <form class=" ">
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a domicile</option>
                                <option value="FR">Bandung</option>
                                <option value="FR">Bandung</option>
                                <option value="FR">Bandung</option>
                                <option value="FR">Bandung</option>
                            </select>
                        </form>

                        <form class=" ">
                            <select
                                id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose a Status</option>
                                <option value="FR">Active</option>
                                <option value="FR">Active</option>
                                <option value="FR">Active</option>
                                <option value="FR">Active</option>
                            </select>
                        </form>
                    </div>
                    {/* <button
                        type="button"
                        class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40"
                    >
                        Add Employee
                    </button> */}
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        type="button"
                        class="bg-primary text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40"
                    >
                        Add Employee
                    </button>
                </div>
            </div>

            <div
                id="crud-modal"
                tabindex="-1"
                class={` ${
                    isPopupOpen ? "grid" : "hidden"
                }     overflow-y-auto overflow-x-hidden fixed  place-items-center bg-black bg-opacity-70 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Add Attendance
                            </h3>
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="crud-modal"
                            >
                                <svg
                                    class="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <label
                                        for="departement"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        departement
                                    </label>
                                    <input
                                        type="text"
                                        id="departement"
                                        name="departement"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                departement: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <label
                                        for="posistion"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        posistion
                                    </label>
                                    <input
                                        type="text"
                                        id="posistion"
                                        name="posistion"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                posistion: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <label
                                        for="domicile"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        domicile
                                    </label>
                                    <input
                                        type="text"
                                        id="domicile"
                                        name="domicile"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                domicile: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div className="w-full flex  justify-end ">
                                <button
                                    // disabled={isButtonDisabled()}
                                    onClick={() => {
                                        addEmployee();
                                        // fetchEmpployee();
                                    }}
                                    class={`${
                                        isButtonDisabled()
                                            ? "bg-gray-400"
                                            : "bg-primary"
                                    } bg-gray-50 ring-4 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                {employeeData && (
                    <>
                        {employeeData.map((employee, index) => (
                            // console.log(employee.name);
                            <EmployeeCard
                                key={employee.id}
                                number={
                                    currentPage * dataPerPage +
                                    index -
                                    dataPerPage +
                                    1
                                }
                                id={employee.id}
                                avatar={employee.avatar}
                                name={employee.name}
                                departement={employee.departement}
                                posistion={employee.posistion}
                                domicile={employee.domicile}
                                email={employee.email}
                                status={employee.status}
                            />
                        ))}
                    </>
                )}
            </div>
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
        </div>
    );
}
