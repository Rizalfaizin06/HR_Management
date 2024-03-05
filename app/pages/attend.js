import { BarChart3 } from "lucide-react";

import SideBar, { SidebarItem } from "../component/sidebar";
import { useContext, createContext, useState, useEffect, Form } from "react";
import { ContentContext } from "../page";

import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";
import { AttendanceListSection } from "../component/attendance_section";

export default function AttendPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk membuka/menutup popup
    const [formData, setFormData] = useState({
        // Define initial state for form data
        id: "1000",
        avatar: "rizal.jpg",
        name: "Rizal Faizin Firdaus",
        position: "Fullstack Developer",
        date: "11-03-2024",
        attend: true, // Set attend to "false" for marking absent
        checkIn: "08:56",
        breakIn: "12:01",
        breakOut: "12:55",
        checkOut: "16:07",
        workingHour: "8.12",
    });

    const handleButtonClick = async () => {
        try {
            const response = await fetch("http://localhost:4000/attendance", {
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
            console.log("Data posted successfully:", await response.json());
        } catch (error) {
            // Handle errors appropriately (e.g., display error message to user)
            console.error("Error posting data:", error);
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div
                id="crud-modal"
                tabindex="-1"
                class={` ${
                    isPopupOpen ? "grid" : "hidden"
                }  overflow-y-auto overflow-x-hidden fixed  place-items-center bg-black bg-opacity-70 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Product
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
                                <div class="col-span-2 sm:col-span-1">
                                    <label
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        value={formData.name}
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
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <select
                                        id="attend"
                                        name="attend"
                                        value={formData.attend}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                attend: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="true">Hadir</option>
                                        <option value="false">
                                            Tidak Hadir
                                        </option>
                                    </select>
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        value={formData.name}
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
                                        for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        value={formData.name}
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
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        value={formData.name}
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
                                        for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name"
                                        required=""
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>
                                <div class="col-span-2">
                                    <label
                                        for="description"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Product Description
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write product description here"
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                onClick={handleButtonClick}
                                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <getAttendance />
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
                    {/* <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value,
                            })
                        }
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                    /> */}
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        type="button"
                        class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40"
                    >
                        {" "}
                        Add Absent
                    </button>

                    <button
                        type="button"
                        class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40"
                    >
                        Export Absent
                    </button>
                </div>
            </div>
            <div className="p-4">
                <div className="  flex-1 font-semibold text-xl">
                    Attendance Overview
                </div>
                <div className=" w-full h-48 my-4 rounded-2xl flex flex-row items-center border border-3 shadow-xl">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            8.1
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Average Working Hours
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            1.2
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Average Break Hours
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            2.3
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Average Overtime Hours
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                </div>
            </div>
            <AttendanceListSection />
        </div>
    );
}
