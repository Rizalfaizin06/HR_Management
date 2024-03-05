"use client";
import { BarChart3 } from "lucide-react";

import SideBar, { SidebarItem } from "../component/sidebar";
import { useContext, createContext, useState } from "react";
import { ContentContext } from "../page";

import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";

export default function AttendPage() {
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
                            3210
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Average Working Hours
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            123
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Average Break Hours
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <h1 className="font-medium text-3xl text-gray-600">
                            42
                        </h1>
                        <span className="font-bold text-md text-gray-600">
                            Average Overtime Hours
                        </span>
                    </div>

                    <div className="w-1 bg-slate-50 rounded border h-32"></div>
                </div>
            </div>
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
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">8,12 Hours</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">8,12 Hours</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">8,12 Hours</td>
                            </tr>
                            <tr class="bg-red-200 border-b    dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td
                                    colSpan={5}
                                    class="px-6 py-4 text-center font-bold"
                                >
                                    Absent
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">8,12 Hours</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">8,12 Hours</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4  w-14">
                                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                                        <Image
                                            className=""
                                            width={40}
                                            height={40}
                                            src={avatar}
                                        ></Image>
                                    </div>
                                </td>
                                <th
                                    scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">
                                            Rizal Faizin Firdaus
                                        </div>
                                        <div class="font-normal text-gray-500">
                                            rizal.faizin@inovasi360.com
                                        </div>
                                    </div>
                                </th>
                                <td class="px-6 py-4">React Developer</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">08:56</td>
                                <td class="px-6 py-4">8,12 Hours</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
