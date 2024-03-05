"use client";
import { BarChart3 } from "lucide-react";
import Button from "@mui/material/Button";

import SideBar, { SidebarItem } from "../component/sidebar";
import { useContext, createContext, useState } from "react";
import { ContentContext } from "../page";
import MyChart from "../component/chart-employee";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomePage() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row items-center p-3 justify-between border-b shadow-md">
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

                <div className="flex flex-row px-2 gap-2 items-center">
                    <div className="w-8 h-8 bg-primary rounded-full ring-2 overflow-hidden flex items-center ring-gray-300">
                        <Image src={avatar} width={60} height={60} />
                    </div>
                    <div className="0 flex-1 font-bold">
                        Rizal Faizin Firdaus
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="  flex-1 font-semibold text-xl">
                    Employee Overview
                </div>
                <div className=" w-full h-48 my-4 rounded-2xl flex flex-row items-center border border-3 shadow-xl">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            3210
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Employee
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            123
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Absent
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            42
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Urgent need
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                </div>

                <div className="flex flex-row w-full gap-5">
                    <div className="w-full h-full p-4 rounded-xl shadow-xl border-2 ">
                        <MyChart />
                    </div>
                    <div className="w-full h-92 p-4 rounded-xl shadow-xl border-2 flex items-center justify-center">
                        Nantinya untuk Rekapitulasi Attendance
                    </div>
                </div>
            </div>
        </div>
    );
}
