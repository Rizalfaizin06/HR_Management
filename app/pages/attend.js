import { BarChart3 } from "lucide-react";

import SideBar, { SidebarItem } from "../component/sidebar";
import { useContext, createContext, useState, useEffect } from "react";
import { ContentContext } from "../page";

import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";
import { AttendanceListSection } from "../component/attendance_section";

export default function AttendPage() {
    return (
        <div className="flex flex-col w-full">
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
                    <button
                        type="button"
                        class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40"
                    >
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
